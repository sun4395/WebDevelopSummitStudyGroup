class Member {
  constructor(id, password, nickname) {
    this.id = id;
    this.password = password;
    this.nickname = nickname;
  }
}

memberList = [];
window.onload = function () {
  document
    .getElementById('btn_add_member')
    .addEventListener('click', CreateMember.addMember);
  document
    .getElementById('btn_reset_input')
    .addEventListener('click', CreateMember.resetCreateMemberFormInput);
  document
    .getElementById('btn_search_member')
    .addEventListener('click', ManageMember.searchMember);
  document
    .getElementById('btn_change_member_info')
    .addEventListener('click', ManageMember.changeMemberInfo);
  document
    .getElementById('btn_remove_member')
    .addEventListener('click', ManageMember.removeMember);
};

class CreateMember {
  static resetCreateMemberFormInput() {
    document.getElementById('new_id').value = '';
    document.getElementById('new_password').value = '';
    document.getElementById('new_nickname').value = '';
  }

  static addMember() {
    let id = document.getElementById('new_id').value;
    let password = document.getElementById('new_password').value;
    let nickname = document.getElementById('new_nickname').value;
    let member = new Member(id, password, nickname);
    memberList.push(member);
    CreateMember.resetCreateMemberFormInput();
  }
}

class ManageMember {
  static searchMember() {
    let id = document.getElementById('find_id').value;
    for (let member of memberList) {
      if (id == member.id) {
        document.getElementById('find_id').value = member.id;
        document.getElementById('find_password').value = member.password;
        document.getElementById('find_nickname').value = member.nickname;
        return member;
      }
    }
    alert(`회원 계정이 없습니다.`);
  }

  static changeMemberInfo() {
    let id = document.getElementById('find_id').value;
    for (let member of memberList) {
      if (id == member.id) {
        member.id = document.getElementById('find_id').value;
        member.password = document.getElementById('find_password').value;
        member.nickname = document.getElementById('find_nickname').value;
        alert(`회원 정보를 수정했습니다.`);
        return member;
      }
    }
    alert(`회원 계정이 없습니다.`);
  }

  static removeMember() {
    let id = document.getElementById('find_id').value;
    for (let member of memberList) {
      if (id == member.id) {
        memberList.splice(memberList.indexOf(member), 1);
        alert(`회원 계정을 삭제했습니다.`);
        ManageMember.resetManageMemberFormInput();
        return member;
      }
    }
    alert(`삭제할 회원 계정이 없습니다.`);
    ManageMember.resetManageMemberFormInput();
  }

  static resetManageMemberFormInput() {
    document.getElementById('find_id').value = '';
    document.getElementById('find_password').value = '';
    document.getElementById('find_nickname').value = '';
  }
}
