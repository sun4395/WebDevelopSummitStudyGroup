// Create Member Join Form
let memberJoinDiv = addFormDiv("member_join", document.body);
addFormTitle("회원 가입", memberJoinDiv);
addFormRow("ID", "text", memberJoinDiv);
addFormRow("비밀번호", "password", memberJoinDiv);
addFormRow("닉네임", "text", memberJoinDiv);
addButton("계정 생성", memberJoinDiv);
addResetButton("입력 초기화", memberJoinDiv);

// Create Member Management Form
let memberManageDiv = addFormDiv("member_manage", document.body);
addFormTitle("회원 관리 프로그램", memberManageDiv);
addFormRow("ID", "text", memberManageDiv);
addFormRow("비밀번호", "password", memberManageDiv);
addFormRow("닉네임", "text", memberManageDiv);
addButton("계정 검색", memberManageDiv);
addButton("정보 수정", memberManageDiv);
addButton("계정 삭제", memberManageDiv);

function addFormDiv(formId, parent) {
    let formDiv = document.createElement("div");
    formDiv.setAttribute("id", formId);
    parent.appendChild(formDiv);
    return formDiv;
}

function addFormTitle(titleText, parent) {
    let formTitleHeader = document.createElement("h1");
    let formTitleText = document.createTextNode(titleText);
    formTitleHeader.setAttribute("class", "form_title");
    formTitleHeader.appendChild(formTitleText);
    parent.appendChild(formTitleHeader);
}

function addFormRow(inputText, inputType, parent) {
    let formRow = document.createElement("div");
    formRow.setAttribute("class", "join_row");

    let formRowHeader = document.createElement("h3");
    let formRowLabel = document.createElement("inputText");
    let labelText = document.createTextNode(inputText);
    formRowLabel.setAttribute("class", "form_field");
    formRowLabel.appendChild(labelText);
    formRowHeader.appendChild(formRowLabel);

    let inputSpan = document.createElement("span");
    inputSpan.setAttribute("class", "input");
    let input = document.createElement("input");
    input.setAttribute("type", inputType);
    inputSpan.appendChild(input);

    formRow.appendChild(formRowHeader);
    formRow.appendChild(inputSpan);
    parent.appendChild(formRow);
}

function addButton(text, parent) {
    let button = document.createElement("button");
    button.setAttribute("class", "btn");
    let buttonText = document.createTextNode(text);
    button.appendChild(buttonText);
    parent.appendChild(button);
}

function addResetButton(text, parent) {
    let button = document.createElement("button");
    button.setAttribute("class", "btn-reset");
    let buttonText = document.createTextNode(text);
    button.appendChild(buttonText);
    parent.appendChild(button);
}