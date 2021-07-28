// Functions for chaining
Element.new = function(tagName) {
    return document.createElement(tagName);
}

Element.prototype.setAttributeAnd = function (attribute, value) {
    this.setAttribute(attribute, value);
    return this;
}

Element.prototype.setTextAnd = function (text) {
    this.innerText = text;
    return this;
}

Element.prototype.setStyleAnd = function (camelCaseStyle, value) {
    this.style[camelCaseStyle] = value;
    return this;
}

Element.prototype.appendAnd = function (...childs) {
    for (const child of childs) {
        this.appendChild(child);
    }
    return this;
}

// Functions to create member management form
function createFormTableRow(label, type, id, name) {
    return Element.new("tr").appendAnd(
        Element.new("td").appendAnd(
            Element.new("label")
            .setAttributeAnd("for", id)
            .setTextAnd(label)
        ),
        Element.new("td").appendAnd(
            Element.new("input")
            .setAttributeAnd("type", type)
            .setAttributeAnd("id", id)
            .setAttributeAnd("name", name)
        ),
    )
}

function createFormSection(title, rows, buttons) {
    return Element.new("section")
    .appendAnd(
        Element.new("h1")
        .setTextAnd(title),
        Element.new("form").appendAnd(
            Element.new("table").appendAnd(...rows),
            Element.new("div")
            .setAttributeAnd("class", "formButtonContainer")
            .appendAnd(...buttons)
        ),
    )
}

// Build DOM
document.body.appendAnd(
    createFormSection(
        "회원 가입",
        [
            createFormTableRow("ID", "text", "join_id", "id"),
            createFormTableRow("비밀번호", "password", "join_password", "password"),
            createFormTableRow("닉네임", "text", "join_nickname", "nickname"),
        ],
        [
            Element.new("button")
            .setAttributeAnd("type", "submit")
            .setTextAnd("계정 생성"),
            Element.new("button")
            .setAttributeAnd("type", "reset")
            .setTextAnd("입력 초기화"),
        ]
    ),
    createFormSection(
        "회원 관리 프로그램",
        [
            createFormTableRow("ID", "text", "manage_id", "id"),
            createFormTableRow("비밀번호", "password", "manage_password", "password"),
            createFormTableRow("닉네임", "text", "manage_nickname", "nickname"),
        ],
        [
            Element.new("button")
            .setAttributeAnd("type", "button")
            .setTextAnd("계정 검색"),
            Element.new("button")
            .setAttributeAnd("type", "button")
            .setTextAnd("정보 수정"),
            Element.new("button")
            .setAttributeAnd("type", "button")
            .setTextAnd("계정 삭제"),
        ]
    )
);

// Apply styles
for (const e of document.getElementsByTagName("body")) {
    e
    .setStyleAnd("fontFamily", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
    .setStyleAnd("padding", "0")
    .setStyleAnd("margin", "0")
}

for (const e of document.getElementsByTagName("h1")) {
    e
    .setStyleAnd("margin", "0")
    .setStyleAnd("textShadow", "2px 2px 3px rgba(0, 0, 0, 0.5)")
    .setStyleAnd("color", "white")
    .setStyleAnd("font-size", "x-large")
}

for (const e of document.getElementsByTagName("section")) {
    e
    .setStyleAnd("color", "white")
    .setStyleAnd("fontSize", "small")
    .setStyleAnd("textShadow", "1px 1px 3px rgba(0, 0, 0, 0.8)")
    .setStyleAnd("backgroundColor", "rgb(252, 13, 27)")
    .setStyleAnd("width", "fit-content")
    .setStyleAnd("padding", "15px")
    .setStyleAnd("borderWidth", "0")
    .setStyleAnd("borderRadius", "15px")
    .setStyleAnd("margin", "10px")
    .setStyleAnd("boxShadow", "2px 2px 6px rgba(0, 0, 0, 0.4)")
}

for (const e of document.getElementsByTagName("form")) {
    e
    .setStyleAnd("margin", "0")
}

for (const e of document.getElementsByTagName("table")) {
    e
    .setStyleAnd("margin", "5px")
}

for (const e of document.getElementsByTagName("td")) {
    e
    .setStyleAnd("padding", "3px")
}

for (const e of document.getElementsByTagName("label")) {
    e
    .setStyleAnd("color", "white")
    .setStyleAnd("fontSize", "small")
}
