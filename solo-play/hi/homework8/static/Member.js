class Member {
    constructor(id, pw, nick){
        let errors = this.checkValidation(id, pw, nick)
        if(errors) {
            console.log(errors)
            throw new Error(errors)
        }

        console.log(`let's make user!`)
        this.id = id
        this.pw = pw
        this.nick = nick
    }

    getId(){
        return this.id;
    }
    
    getPw(){
        return this.pw;
    }

    getNick(){
        return this.nick;
    }

    setInfo(pw, nick) {
        let errors = this.checkValidation(null, pw, nick)
        if(errors) {
            console.log(`validation error exists`)
            throw new Error(errors)
        }

        this.pw = pw
        this.nick = nick

        console.log(`For user ${this.id}, ${this.pw}, ${this.nick} successfully changed`)
    }

    checkValidation(id, pw, nick){
        let errors = {}

        if(id !== null) {
            console.log(`id error check`)
            if (this.isValidId(id) === false) {
                errors[`id`] = `아이디는 4글자이상 15글자 이하, 문자로 시작해야하며, 숫자와 .과 _를 포함할 수있습니다.`
            }
        }
        if(pw !== null) {
            console.log(`pw error check`)
            if (this.isValidPw(pw) === false) {
                errors[`pw`] = `비밀번호는 8글자 이상 15글자 이하, 문자, 숫자, 특수문자를 하나씩 포함해야합니다.`
            }
        }
        if(nick !== null) {
            console.log(`nick error check`)
            if(this.isValidNick(nick) === false) {
                errors[`nick`] = `닉네임은 3글자이상 15글자 이하, 문자와 숫자, .과 _를 포함할 수있습니다.`
            }
        }

        return Object.keys(errors).length === 0 ? null : JSON.stringify(errors)
    }

    isValidId(id){
        let re_id = /^[A-Za-z]([\w.\d]{3,14}$)/
        return re_id.exec(id) ? true : false        
    }

    isValidPw(pw){
        // alphebet, special character, digit
        let re_pw = /(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]){8,15}/
        return re_pw.exec(pw) ? true: false
    }

    isValidNick(nick){
        //Available charcter: korean, alphanumeric, ., _
        let re_nick = /^[ㄱ-ㅎ가-힣a-zA-Z0-9_.]{2,15}$/
        return re_nick.exec(nick) ? true : false
    }

}