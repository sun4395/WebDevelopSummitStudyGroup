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
        WebSocketClient.send(msg);

        //Chat.showMessageLog(msg);
    }

    static showMessageLog(msg) {
        console.log('Chat - showMessageLog');
        console.log(msg);

        // 따로 말해 준 것처럼 채팅 한 줄의 구조를 다시 잡아보세요.

        let chatContainer = document.createElement("div");
        chatContainer.className = "chatContainer";
        
        let chatIcon = document.createElement("img");
        chatIcon.className = "chatIcon";
        chatIcon.src = "icon/icon_red.jpeg";
        
        let chatUsername = document.createElement("span");
        chatUsername.className = "chatUsername";
        chatUsername.innerText = "이선영";

        let chatContent = document.createElement("span");
        chatContent.className = "chatContent";
        chatContent.innerText = msg;

        chatContainer.appendChild(chatIcon);
        chatContainer.appendChild(chatUsername);
        chatContainer.appendChild(chatContent);

        //let textMsg = document.createElement("span");
        //textMsg.className = "myChatText";
        // 스타일은 Element.style.XXX 로 변경
        //textMsg.fontSize = "17px";
        //textMsg.innerText = msg;

        let enter = document.createElement("br");

        //document.getElementById(`sectionChat`)
        //    .appendChild(textMsg)
        //    .appendChild(enter);
        document.getElementById('sectionChat').appendChild(chatContainer);

        document.getElementById('inputText').value = '';
    }

}

window.onload = function () {
    WebSocketClient.connect().then(function(data) { 
        console.log("connected to server!!"); // Promise resolve

        // 채팅 프로그램은 보통 엔터 키로 채팅을 합니다. 엔터로도 구현해보세요.
        document.getElementById('submitBtn').addEventListener('click', Chat.sendMyMessage);
        document.getElementById('inputText').addEventListener('keypress', function (evt) {
            if(evt.key === 'Enter'){
                Chat.sendMyMessage();
            }
        });
    });

};