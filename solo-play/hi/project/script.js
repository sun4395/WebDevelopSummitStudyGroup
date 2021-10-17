window.onload = function () {
  const memberList = new ChattingMemberList(document.getElementById(`chatMemberArea`),
                                            {nick:"이혜인"});
  const chatLog = new ChatLog(memberList, document.getElementById(`chatLogArea`));

  // const currentUser = memberList.getMemberbyId(1);
  const chatInputBox = document.getElementById(`chatInput`);
  chatInputBox.addEventListener(`keydown`, function (event) {
    console.log("HERE 222");
    if (event.key == `Enter`) {
      console.log("HERE ###");
      if (!event.shiftKey) {
        event.preventDefault();
        document.getElementById(`chatSend`).click();
      }
    }
  });

  document.getElementById(`chatSend`).onclick = function () {
    chatLog.addLog({userId: memberList.getCurrentUserId(), msg: chatInputBox.value });
    chatInputBox.value = "";
  };


  function addChatLog(chatlog) {
    //TODO call class
  }
};
