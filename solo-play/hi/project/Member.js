class ChattingMemberList {
  member_list = [];
  member_container = null
  currentUserId = ""

  constructor(container, info) {
    this.member_container = container;
  
    //TODO : get data from backend server
    let list = [
      { id: "1", nick: "신명선", icon: "ms.png" },
      { id: "2", nick: "이선영", icon: "sy.png" },
      { id: "3", nick: "Junyoung Park", icon: "jy.png" },
      { id: "4", nick: "juo", icon: "juo.png" },
    ];

    for (let member of list) {
      this.addMember(member);
    }
    
    this.createCurrentUser(info);
  }

  createCurrentUser(info) {
    console.log(`current User info = ${JSON.stringify(info)}`)
    //TODO: send current User Info to server
    //      get id from server
    //      currently, just set user id by temp value
    let currentUserInfo = info;
    this.currentUserId = (this.member_list.length + 1) + "";
    currentUserInfo[`id`] = this.currentUserId;
    this.addMember(info)
  }

  getCurrentUserId() {
    return this.currentUserId;
  }

  addMember(info) {
    if (!info.icon) info.icon = "default.png";
    let member = new MemberInfo({
      id: info.id,
      nick: info.nick,
      icon: info.icon,
    });
    this.member_list.push(member);
    console.log(`addMember = ${JSON.stringify(member)}`)
    this.member_container.appendChild(member.getUserInfoUI());
    return member;
  }

  getMemberbyId(id) {
    console.log(`get Member List :: ${JSON.stringify(this.member_list)}`)
    console.log(`try to find user info. id = ${id}`)
    for (let member of this.member_list) {
      console.log(`--- ${JSON.stringify(member)}`)
      if (id === member.id) {
        return member;
      }
    }
    return null;
  }

  getMemberList() {
    return this.member_list;
  }
}

class MemberInfo {
  constructor(params) {
    this.id = params.id;
    this.nick = params.nick;
    this.icon = params.icon;
  }

  getUserIconUI() {
    let circle = document.createElement(`div`);
    circle.setAttribute(`class`, `circle`);
    let userIcon = document.createElement(`img`);
    userIcon.setAttribute(`class`, `userIcon`);
    if (this.icon === null || this.icon === undefined) {
      this.icon = "default.png";
    }
    userIcon.setAttribute(`src`, `resource/` + this.icon);
    circle.appendChild(userIcon);

    return circle;
  }

  getUserInfoUI() {
    let userInfo = document.createElement(`div`);
    userInfo.setAttribute(`class`, `userInfo`);

    let userIcon = this.getUserIconUI();
    userInfo.appendChild(userIcon);

    let userName = document.createElement(`div`);
    userName.setAttribute(`class`, `userName`);
    userName.innerText = this.nick;
    userInfo.appendChild(userName);

    return userInfo;
  }
}
