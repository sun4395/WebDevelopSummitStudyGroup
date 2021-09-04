class Member {
    constructor(id, pwd, name) {
        this.id = id;
        this.pwd = pwd;
        this.name = name;
    }
}

class Chat {
    constructor() {
        console.log('Chat - constructor');
    }
    static sendMyMessage() {
        console.log('Chat - sendMyMessage');
        let msg = document.getElementById('inputText').value;
        if (msg == "") {
            console.log('Chat - blank error');
            alert('blank error');
            return;
        }

        console.log(msg);
        Chat.showMessageLog(msg);
    }

    static showMessageLog(msg) {
        console.log('Chat - showMessageLog');
        console.log(msg);

        // 따로 말해 준 것처럼 채팅 한 줄의 구조를 다시 잡아보세요.
        let textMsg = document.createElement("span");
        textMsg.className = "myChatText";
        // 스타일은 Element.style.XXX 로 변경
        textMsg.fontSize = "17px";
        textMsg.innerText = msg;

        let enter = document.createElement("br");

        document.getElementById(`sectionChat`)
            .appendChild(textMsg)
            .appendChild(enter);

        document.getElementById('inputText').value = '';
    }

}

window.onload = function () {
    // 채팅 프로그램은 보통 엔터 키로 채팅을 합니다. 엔터로도 구현해보세요.
    document.getElementById('submitBtn').addEventListener('click', Chat.sendMyMessage);

};