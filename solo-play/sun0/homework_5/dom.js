

let br = document.createElement("br");
const section = document.createElement("section");
document.body.appendChild(section);

const sectionJoin = createInnerSection("join", "회원 가입");
section.appendChild(sectionJoin);

let joinTableArr = ["ID", "비밀번호", "닉네임"];
const joinTable = createTableForm("joinTable", joinTableArr.length, joinTableArr);
sectionJoin.appendChild(joinTable);
addTableInput("joinTable0", "text", "id_join", "id");
addTableInput("joinTable1", "password", "pwd_join", "pwd");
addTableInput("joinTable2", "text", "name_join", "name");

sectionJoin.appendChild(br);
applyButton(sectionJoin, "계정 생성");
applyButton(sectionJoin, "입력 초기화");

const sectionManage = createInnerSection("manage", "회원 관리 프로그램");
section.appendChild(sectionManage);

let manageTableArr = ["ID", "비밀번호", "닉네임"];
const manageTable = createTableForm("manageTable", manageTableArr.length, manageTableArr);
sectionManage.appendChild(manageTable);
addTableInput("manageTable0", "text", "id_manage", "id");
addTableInput("manageTable1", "password", "pwd_manage", "pwd");
addTableInput("manageTable2", "text", "name_manage", "name");

sectionManage.appendChild(br);
applyButton(sectionManage, "계정 검색");
applyButton(sectionManage, "정보 수정");
applyButton(sectionManage, "계정 삭제");


function createInnerSection(name, title) {
    let sectionName = document.createElement(name);
    let sectionTitleHeader = document.createElement("h2");
    let sectionTitleText = document.createTextNode(title);
    sectionTitleHeader.appendChild(sectionTitleText);
    sectionName.appendChild(sectionTitleHeader);

    return sectionName;
}

function createTableForm(tableName, num, tableArr) {
    let table = document.createElement("table");
    for(let i=0; i<num; i++) {
        let tr = document.createElement("tr");
        tr.setAttribute("id", tableName+i.toString());
        console.log(tableName+i.toString());
        let td = document.createElement("td");
        let tdText = document.createTextNode(tableArr[i]);

        td.appendChild(tdText);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    return table;
}

function addTableInput(rowId, type, id, name) {
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);

    let rowElement = document.getElementById(rowId);
    td.appendChild(input);
    rowElement.appendChild(td);
}

function applyButton(sectionName, buttonName) {
    let button = document.createElement("button");
    let buttonText = document.createTextNode(buttonName);

    button.appendChild(buttonText);
    sectionName.appendChild(button);
}