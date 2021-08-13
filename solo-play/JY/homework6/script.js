window.onload = function () {

    // 회원 가입 - 계정 생성
    document.querySelector(`button.registerBtn#createId`).onclick = function () {
        try {
            Member.register({
                id: document.getElementById(`registerInput_id`).value,
                pw: document.getElementById(`registerInput_pw`).value,
                nickname: document.getElementById(`registerInput_nick`).value,
            });
        } catch (err) {
            alert(err);
        }
    }

    // 회원 가입 - 입력 초기화
    document.querySelector(`button.registerBtn#resetAll`).onclick = function () {
        try {
            document.getElementById(`registerInput_id`).value = ``;
            document.getElementById(`registerInput_pw`).value = ``;
            document.getElementById(`registerInput_nick`).value = ``;
        } catch (err) {
            alert(err);
        }
    }

    // 회원 관리 프로그램 - 계정 검색
    document.querySelector(`button.manageBtn#searchId`).onclick = function () {
        try {
            const targetId = document.getElementById(`manageInput_id`).value;
            const targetMember = Member.search({
                id: targetId
            });
            if (null === targetMember) {
                alert(`Cannot found information of [${targetId}]`);
            } else {
                alert(`ID : [${targetMember.id}]\n` +
                    `Nickname : [${targetMember.nickname}]`);
            }
        } catch (err) {
            alert(err);
        }
    }

    // 회원 관리 프로그램 - 입력 초기화
    document.querySelector(`button.manageBtn#resetAll`).onclick = function () {
        try {
            document.getElementById(`manageInput_id`).value = ``;
            document.getElementById(`manageInput_pw`).value = ``;
            document.getElementById(`manageInput_nick`).value = ``;
        } catch (err) {
            alert(err);
        }
    }


    // 회원 관리 프로그램 - 계정 삭제
    document.querySelector(`button.manageBtn#deleteId`).onclick = function () {
        try {
            const targetId = document.getElementById(`manageInput_id`).value;
            Member.remove({
                id : targetId
            })
        } catch (err) {
            alert(err);
        }
    }
}