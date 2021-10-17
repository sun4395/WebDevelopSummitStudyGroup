let requestUrl = `http://localhost:8080`;

class Member {
  constructor(id, password, nickname) {
    this.id = id;
    this.password = password;
    this.nickname = nickname;
  }
}

window.onload = function () {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (xhttp.status === 200) {
    }
  };

  document.getElementById(`btn_add_member`).addEventListener(
    `click`,
    function () {
      requestPostMember(requestUrl + `/member`, function (text) {
        alert(text);
      });
    },
    false
  );
  document
    .getElementById(`btn_reset_input`)
    .addEventListener(`click`, function () {
      Reset.resetCreateMemberFormInput();
    });
  document
    .getElementById(`btn_search_member`)
    .addEventListener(`click`, function () {
      let id = document.getElementById("find_id").value;
      requestGetMember(requestUrl + `/member/` + id, function (text) {
        alert(text);
      });
    });
  document
    .getElementById(`btn_change_member_info`)
    .addEventListener(`click`, function () {
      let id = document.getElementById("find_id").value;
      requestPutMember(requestUrl + `/member/` + id, function (text) {
        alert(text);
      });
    });
  document
    .getElementById(`btn_remove_member`)
    .addEventListener(`click`, function () {
      let id = document.getElementById("find_id").value;
      requestDeleteMember(requestUrl + `/member/` + id, function (text) {
        alert(text);
      });
    });
};

/////// GET ///////
function requestGetMember(dataUrl, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("find_password").value = JSON.parse(
        this.responseText
      ).password;
      document.getElementById("find_nickname").value = JSON.parse(
        this.responseText
      ).nickname;
    } else if (this.readyState === 4 && this.status === 404) {
      callback(`회원 계정이 없습니다.`);
    }
  };
  xhttp.open(`GET`, dataUrl);
  xhttp.send();
}

/////// POST //////
function requestPostMember(dataUrl, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(`회원 계정을 추가했습니다`);
    } else if (this.readyState === 4 && this.status === 409) {
      callback(`이미 존재하는 회원입니다.`);
    }
  };

  let id = document.getElementById("new_id").value;
  let password = document.getElementById("new_password").value;
  let nickname = document.getElementById("new_nickname").value;
  let member = new Member(id, password, nickname);

  xhttp.open(`POST`, dataUrl);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(member));
  Reset.resetCreateMemberFormInput();
}

////// PUT ///////
function requestPutMember(dataUrl, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(`회원 계정을 수정했습니다.`);
    } else if (this.readyState === 4 && this.status === 404) {
      callback(`회원 계정이 없습니다.`);
    }
  };

  let id = document.getElementById("find_id").value;
  let password = document.getElementById("find_password").value;
  let nickname = document.getElementById("find_nickname").value;
  let member = new Member(id, password, nickname);

  xhttp.open(`PUT`, dataUrl);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(member));
  Reset.resetManageMemberFormInput();
}

////// DELETE /////
function requestDeleteMember(dataUrl, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(`회원 계정을 삭제했습니다.`);
    } else if (this.readyState === 4 && this.status === 404) {
      callback(`회원 계정이 없습니다.`);
    }
  };
  xhttp.open(`DELETE`, dataUrl);
  xhttp.send();
  Reset.resetManageMemberFormInput();
}

class Reset {
  static resetCreateMemberFormInput() {
    // console.log("resetCreateMemberFormInput");
    document.getElementById("new_id").value = "";
    document.getElementById("new_password").value = "";
    document.getElementById("new_nickname").value = "";
  }

  static resetManageMemberFormInput() {
    // console.log("resetManageMemberFormInput");
    document.getElementById("find_id").value = "";
    document.getElementById("find_password").value = "";
    document.getElementById("find_nickname").value = "";
  }
}
