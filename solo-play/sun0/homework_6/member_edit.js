

class Member{

    static memberList = []; 

    /*constructor(id, pwd, name){*/
    constructor(memberInfo){
    this.id = memberInfo.id;
    this.pwd = memberInfo.pwd;
    this.name = memberInfo.name;

    Member.memberList.push(this);
    } 

    static searchById(searchId) { 

        for (let i = 0; i < Member.memberList.length; i++) {
            if(Member.memberList[i].id === searchId)
                return Member.memberList[i];
        }
        return null;
    }
}

window.onload = function () {
    document.getElementById('button_create').addEventListener('click', function() {
        let memberInfo = {};
        memberInfo.id = document.getElementById('id_join').value;
        memberInfo.pwd = document.getElementById('pwd_join').value;
        memberInfo.name = document.getElementById('name_join').value;

        for (let key in memberInfo) {
            if(memberInfo[key] === "")
            {
                console.log('Jone - blank error');
                alert('blank error!');
                return null;
            }
        }
        /*if(memberInfo.id == "" || memberInfo.pwd == "" || memberInfo.name == ""){
            console.log('Join - blank error');
            alert('blank error');
            return null;
        }*/
        
        new Member(memberInfo);

    });

    document.getElementById('button_reset').addEventListener('click', Join.resetAccount);

    document.getElementById('button_member_search').addEventListener('click', function(){
        console.log('Manage - searchMember');
        const searchId = document.getElementById('id_manage').value;
        const findMember = Member.searchById(searchId);
        if(findMember  !== null)
            return alert(`member found. \n`
            +`id:${findMember.id}\n`
            +`name:${findMember.name}`);
            // return alert('member found. \nid:'+findMember.id+'\nname:'+findMember.name);
        else
            return alert('There is no member. (id:'+searchId+')');
    });

    document.getElementById('button_member_edit').addEventListener('click', Manage.editMember);
    document.getElementById('button_member_delete').addEventListener('click', Manage.deleteMember);

};



class Join{
    constructor(){
        console.log('Join - constructor');
    }   
    static registerAccount(){
        console.log('Join - registerAccount');
        let setId = document.getElementById('id_join').value;
        let setPwd = document.getElementById('pwd_join').value;
        let setName = document.getElementById('name_join').value;
        if(setId == "" || setPwd == "" || setName == ""){
            console.log('Join - blank error');
            alert('blank error');
            return;
        }
        
        let newMem = new Member(setId, setPwd, setName);
        console.log(newMem);
        localStorage.setItem(setId, JSON.stringify(newMem)); 
    }

    static resetAccount(){
        console.log('Join - resetAccount');
        document.getElementById('id_join').value = '';
        document.getElementById('pwd_join').value = '';
        document.getElementById('name_join').value = '';
    }
}

class Manage{
    constructor(){
        console.log('Manage - constructor');
    } 

/*
    static findMember(){
        let searchId = document.getElementById('id_manage').value;

        let getItem = localStorage.getItem(searchId);
        let getItemParse = JSON.parse(getItem);
        console.log('parsed data:',getItemParse);

        return getItemParse;
    }*/
    static searchMember(){
        console.log('Manage - searchMember');
        let searchId = document.getElementById('id_manage').value;

        let getItem = localStorage.getItem(searchId);
        let getItemParse = JSON.parse(getItem);
        console.log('parsed data:',getItemParse);
        //getItemParse = this.findMember();

        if(getItemParse == null)
            alert('There is no member. (id:'+searchId+')');
        else
            alert('member found. \nid:'+getItemParse.id+'\nname:'+getItemParse.name);
    }

    static deleteMember(){
        console.log('Manage - deleteMember');
        let searchId = document.getElementById('id_manage').value;

        let getItem = localStorage.getItem(searchId);
        let getItemParse = JSON.parse(getItem);
        console.log('parsed data:',getItemParse);
        //getItemParse = this.findMember();

        if(getItemParse == null)
            alert('There is no member. (id:'+searchId+')');
        else
        {
            localStorage.removeItem(searchId);
            alert('member deleted. \nid:'+getItemParse.id+'\nname:'+getItemParse.name);
        }
    }
    
    static editMember(){
        console.log('Manage - editMember');
        let searchId = document.getElementById('id_manage').value;

        let getItem = localStorage.getItem(searchId);
        let getItemParse = JSON.parse(getItem);
        console.log('parsed data:',getItemParse);
        //getItemParse = this.findMember();

        if(getItemParse == null)
            alert('There is no member. (id:'+searchId+')');
        else
        {
            let editId = document.getElementById('id_manage').value;
            let editPwd = document.getElementById('pwd_manage').value;
            let editName = document.getElementById('name_manage').value;

            let editMem = new Member(editId, editPwd, editName);
            console.log(editMem);
            localStorage.setItem(editId, JSON.stringify(editMem)); 

            alert('member edited.');
        }


    }
}

window.onload = function () {
    document.getElementById('button_create').addEventListener('click', Join.registerAccount);
    document.getElementById('button_reset').addEventListener('click', Join.resetAccount);

    document.getElementById('button_member_search').addEventListener('click', Manage.searchMember);
    document.getElementById('button_member_edit').addEventListener('click', Manage.editMember);
    document.getElementById('button_member_delete').addEventListener('click', Manage.deleteMember);

};

