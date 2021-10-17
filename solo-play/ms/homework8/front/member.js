class Member {
  constructor(id, password, nickname) {
    this.id = id;
    this.password = password;
    this.nickname = nickname;
  }
}

window.onload = function () {
  let manageMember = new ManageMember();
  document.getElementById("btn_add_member").addEventListener(
    "click",
    function () {
      manageMember.addMember();
    },
    false
  );
  document.getElementById("btn_reset_input").addEventListener(
    "click",
    function () {
      manageMember.resetCreateMemberFormInput();
    },
    false
  );
  document.getElementById("btn_search_member").addEventListener(
    "click",
    function () {
      manageMember.searchMember();
    },
    false
  );
  document.getElementById("btn_change_member_info").addEventListener(
    "click",
    function () {
      manageMember.changeMemberInfo();
    },
    false
  );
  document.getElementById("btn_remove_member").addEventListener(
    "click",
    function () {
      manageMember.removeMember();
    },
    false
  );
};

class ManageMember {
  constructor() {
    this.memberList = [];
  }

  addMember() {
    // console.log("addMember");
    let id = document.getElementById("new_id").value;
    let password = document.getElementById("new_password").value;
    let nickname = document.getElementById("new_nickname").value;
    let member = new Member(id, password, nickname);
    this.memberList.push(member);
    this.resetCreateMemberFormInput();
  }

  searchMember() {
    // console.log("searchMember");
    let id = document.getElementById("find_id").value;
    for (let member of this.memberList) {
      if (id === member.id) {
        document.getElementById("find_id").value = member.id;
        document.getElementById("find_password").value = member.password;
        document.getElementById("find_nickname").value = member.nickname;
        return member;
      }
    }
    alert(`회원 계정이 없습니다.`);
  }

  changeMemberInfo() {
    // console.log("changeMemberInfo");
    let id = document.getElementById("find_id").value;
    for (let member of this.memberList) {
      if (id === member.id) {
        member.id = document.getElementById("find_id").value;
        member.password = document.getElementById("find_password").value;
        member.nickname = document.getElementById("find_nickname").value;
        alert(`회원 정보를 수정했습니다.`);
        return member;
      }
    }
    alert(`회원 계정이 없습니다.`);
  }

  removeMember() {
    // console.log("removeMember");
    let id = document.getElementById("find_id").value;
    for (let member of this.memberList) {
      if (id === member.id) {
        this.memberList.splice(this.memberList.indexOf(member), 1);
        alert(`회원 계정을 삭제했습니다.`);
        this.resetManageMemberFormInput();
        return member;
      }
    }
    alert(`삭제할 회원 계정이 없습니다.`);
    this.resetManageMemberFormInput();
  }

  resetCreateMemberFormInput() {
    // console.log("resetCreateMemberFormInput");
    document.getElementById("new_id").value = "";
    document.getElementById("new_password").value = "";
    document.getElementById("new_nickname").value = "";
  }

  resetManageMemberFormInput() {
    // console.log("resetManageMemberFormInput");
    document.getElementById("find_id").value = "";
    document.getElementById("find_password").value = "";
    document.getElementById("find_nickname").value = "";
  }
}
