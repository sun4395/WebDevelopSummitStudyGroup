class Member{
constructor(id, pwd, name){
this.id = id;
this.pwd = pwd;
this.name = name;
}
}

class Chat{
constructor(){
console.log('Chat - constructor');
}
static sendMyMessage(){
console.log('Chat - sendMyMessage');
let msg = document.getElementById('inputText').value;
if(msg == ""){
console.log('Chat - blank error');
alert('blank error');
return;
}

console.log(msg);
Chat.showMessageLog(msg);
}

static showMessageLog(msg){
console.log('Chat - showMessageLog');
console.log(msg);

let textMsg = document.createElement("span");
textMsg.className = "myChatText";
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
document.getElementById('submitBtn').addEventListener('click', Chat.sendMyMessage);

};