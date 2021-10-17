const express = require(`express`);
const store = require(`store`);
const app = express();

app.use(express.static(`public`));
app.use(express.json());

function start(port) {
  app.listen(port);
}

class MemberInfo {
  constructor(password, nickname) {
    this.password = password;
    this.nickname = nickname;
  }
}

app.get(`/member/:id`, function (req, res) {
  let memberInfo = store.get(req.params.id);
  if (memberInfo != undefined) {
    res.send(memberInfo);
  } else {
    res.status(404).send("Sorry can't find that!");
  }
});

app.post(`/member`, function (req, res) {
  let id = req.body.id;
  let memberInfo = new MemberInfo(req.body.password, req.body.nickname);
  let findMemberInfo = store.get(id);
  if (findMemberInfo != undefined) {
    res.status(409).send("Already Exist!");
  } else {
    store.set(id, JSON.stringify(memberInfo));
    res.send(`{}`);
  }
});

app.put(`/member/:id`, function (req, res) {
  let id = req.params.id;
  let memberInfo = new MemberInfo(req.body.password, req.body.nickname);
  let findMemberInfo = store.get(id);
  if (findMemberInfo != undefined) {
    console.log(memberInfo);
    store.set(id, JSON.stringify(memberInfo));
    res.send(`{}`);
  } else {
    res.status(404).send("Sorry can't find that!");
  }
});

app.delete(`/member/:id`, function (req, res) {
  let id = req.params.id;
  let memberInfo = store.get(id);
  if (memberInfo != undefined) {
    store.remove(id);
    res.send(memberInfo);
  } else {
    res.status(404).send("Sorry can't find that!");
  }
});

exports.start = start;
