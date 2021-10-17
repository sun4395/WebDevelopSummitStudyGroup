class ChatLog {
  chat_arr = [];
  chat_container = null;
  memberList = null;

  constructor(memberListClass, container) {
    this.memberList = memberListClass;
    this.chat_container = container;
    console.log(`create chat log :: current user : ${this.memberList.getCurrentUserId()}`)

    let list = [
      {userId: this.memberList.getCurrentUserId(), msg: "휴가가 최고다"},
      {userId: "1", msg: "집에선 시간이 잘간다"}
    ]

    for (let log of list) {
      this.addLog(log)
    }
  }

  addLog(log) {
    console.log(`addLog!! ${JSON.stringify(log)}, chat_arr_len = ${this.chat_arr.length}`)
    let newlog = new ChatLogItem(log);

    if (this.chat_arr.length > 0 &&
      this.chat_arr[this.chat_arr.length-1].userId === newlog.userId) {
        console.log("show icon false")
        this.chat_container.appendChild(
          newlog.createUIForLogItem(this.memberList, false))
    } else {
      console.log("show icon true")
      this.chat_container.appendChild(newlog.createUIForLogItem(this.memberList, true))
    }

    this.chat_arr.push(newlog);
    this.chat_container.scrollTop = this.chat_container.scrollHeight;
    return newlog;
  }

  getLatestLog() {
    return chat_arr[chat_arr.length - 1];
  }

  getChatList() {
    return this.chat_arr;
  }

  static UpdateChatLogUI(log) {}
}

class ChatLogItem {
  constructor(params) {
    this.userId = params.userId;
    this.msg = params.msg;
    this.timestamp = Date.now();
  }

  getChatLogItem() {
    return {
      sender: this.userId,
      message: this.msg,
      time: this._covertStampToStr(),
    };
  }

  createUIForLogItem(memberList, showIcon) {
    console.log(`try to create Log UI with info ${this.userId}, ${this.msg}, ${showIcon}`)
    let chat = document.createElement(`div`);

    if(this.userId === memberList.getCurrentUserId()){
      chat.setAttribute(`class`, `chat my`);
    } else {
      chat.setAttribute(`class`, `chat`);
      let user = memberList.getMemberbyId(this.userId)
      console.log(`ceateUIForLogItem :: user ${JSON.stringify(user)}`)
      let userIcon = user.getUserIconUI();
      userIcon.setAttribute(`class`, `circlesmall`)
      
      if(!showIcon) userIcon.style.visibility = `hidden`;
      chat.appendChild(userIcon);
    }

    let content = document.createElement(`div`);
    content.setAttribute(`class`, `content`);
    content.innerText = this.msg;
    chat.appendChild(content);

    return chat;
  }

  _covertStampToStr() {
    let date = new Date(this.time);
    return date.getHours() + date.getMinutes();
  }
}
