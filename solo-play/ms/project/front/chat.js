class Users {
  constructor() {
    if (Users.exist) return Users.instance;
    Users.instance = this;
    Users.exist = this;
    this.__users = [];
  }

  addUser(user) {
    this.__users.push(user);
  }

  getUsers() {
    return this.__users;
  }

  addMyUser() {
    this.addUser(
      (() => {
        let myUser = new User(`신명선`, `./resources/명선.png`);
        myUser.setMyUser(true);
        return myUser;
      })()
    );
    document.getElementsByTagName(`header`);
  }

  getMyUser() {
    for (let user of this.getUsers()) {
      if (user.isMyUser() === true) {
        return user;
      }
    }
  }

  addOtherUsers() {
    this.addUser(new User(`Slackbot`, `./resources/slackbot.png`));
    this.addUser(new User(`이혜인`, `./resources/혜인.png`));
    this.addUser(new User(`이선영`, `./resources/선영.png`));
    this.addUser(new User(`Junyoung Park`, `./resources/준영.png`));
    this.addUser(new User(`juo`, `./resources/주호.png`));
  }
}

class User {
  constructor(name, image) {
    this.__name = name;
    this.__image = image;
    this.__myUser = false;
  }

  getName() {
    return this.__name;
  }
  getImage() {
    return this.__image;
  }
  isMyUser() {
    return this.__myUser;
  }
  setMyUser() {
    this.__myUser = true;
  }
}

class Message {
  constructor(sender, message) {
    this.__sender = sender;
    this.__message = message;
  }
}

class Header {
  init() {
    let userList = new UserList();
    let users = new Users();
    document
      .getElementById(`header_area`)
      .appendChild(userList.createUserThumnail(users.getMyUser().getImage()));
  }
}

class UserList {
  constructor() {
    if (UserList.exist) return UserList.instance;
    UserList.instance = this;
    UserList.exist = this;
  }

  createUserThumnail(imageUrl) {
    let image = document.createElement(`img`);
    image.setAttribute(`src`, imageUrl);
    image.setAttribute(`class`, `thumbnail`);
    return image;
  }

  createUserName(name, isMyUser, bold) {
    let user = document.createElement(`p`);
    user.appendChild(document.createTextNode(name));
    user.setAttribute(`class`, `user_name`);
    if (isMyUser === true || bold === true) {
      user.setAttribute(`id`, `boldUserName`);
    }
    return user;
  }

  init() {
    let users = new Users();
    users.addMyUser();
    users.addOtherUsers();

    let userList = document.getElementById(`user_list`);

    users.getUsers().forEach((r) => {
      let userLayout = document.createElement(`div`);
      userLayout.setAttribute(`class`, `user_layout`);
      userLayout.appendChild(this.createUserThumnail(r.getImage()));
      userLayout.appendChild(
        this.createUserName(r.getName(), r.isMyUser(), false)
      );
      userList.appendChild(userLayout);
    });
  }
}

class Chat {
  getCurrentTime() {
    let today = new Date();
    return today.toLocaleTimeString();
  }

  createChatElem(text) {
    let users = new Users();
    let userList = new UserList();
    let myUser = users.getMyUser();

    let chatElem = document.createElement(`div`);
    chatElem.setAttribute(`class`, `chat_elem`);
    chatElem.setAttribute(`autocomplete`, `off`);
    chatElem.appendChild(userList.createUserThumnail(myUser.getImage()));
    chatElem.appendChild(
      userList.createUserName(myUser.getName(), myUser.isMyUser(), true)
    );
    let textElem = document.createElement(`p`);
    textElem.appendChild(document.createTextNode(text));
    chatElem.append(textElem);
    let timeElem = document.createElement(`p`);
    timeElem.setAttribute(`class`, `time_elem`);
    timeElem.appendChild(document.createTextNode(this.getCurrentTime()));
    chatElem.append(timeElem);
    return chatElem;
  }

  addChat() {
    let inputTextElem = document.getElementById(`input_text`);
    if (inputTextElem.value === ``) {
      return;
    }

    document
      .getElementById(`chat_text`)
      .appendChild(this.createChatElem(inputTextElem.value));

    inputTextElem.value = ``;

    let chatArea = document.getElementById(`chat_text`);
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  addTextInputEventListener() {
    document
      .getElementById(`input_text`)
      .addEventListener(`keypress`, async (e) => {
        if (e.code === `Enter`) this.addChat();
      });
  }

  init() {
    let userList = new UserList();
    userList.init();

    let header = new Header();
    header.init();

    this.addTextInputEventListener();
  }
}

window.onload = function () {
  let chat = new Chat();
  chat.init();
};
