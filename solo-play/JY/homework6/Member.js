class Member {
    // 계정 생성은 Member 클래스 인스턴스로서 관리
    constructor(params) {
        const checkParams = [
            `id`, `pw`, `nickname`
        ];

        for (let prop of checkParams) {
            if (false === (prop in params)) {
                throw new Error(`Missing parameter : ${prop}`);
            }
            if (params[prop].length === 0) {
                throw new Error(`No input parameter : ${prop}`);
            }
            // this.id / this.pw / this.nickname 
            this[prop] = params[prop];
        }
    }

    static __list = [];

    static register(params) {
        const checkParams = [
            `id`, `pw`, `nickname`
        ];

        for (let prop of checkParams) {
            if (false === (prop in params)) {
                throw new Error(`Missing parameter : ${prop}`);
            }
            if (params[prop].length === 0) {
                throw new Error(`No input parameter : ${prop}`);
            }
            // this.id / this.pw / this.nickname 
            this[prop] = params[prop];
        }
        for (let memberInfo in this.__list) {
            if (params.id === memberInfo.id) {
                throw new Error(`[Register] Already exists : ${params.id}`);
            }
        }

        const member = new Member(params);
        this.__list.push(member);
    }

    static search(params) {
        // 계정 검색의  경우에는 ID로만 체크하도록 함
        const checkParams = [
            `id`
            // , `pw`, `nickname`
        ];

        for (let prop of checkParams) {
            if (false === (prop in params)) {
                throw new Error(`Missing parameter : ${prop}`);
            }
            if (params[prop].length === 0) {
                throw new Error(`No input parameter : ${prop}`);
            }
            // this.id / this.pw / this.nickname 
            this[prop] = params[prop];
        }

        for (let key in this.__list) {
            const memberInfo = this.__list[key]
            if (params.id === memberInfo.id) {
                return memberInfo;
            }
        }

        return null;
    }

    static remove(params) {
        // 계정 삭제의 경우에는 ID로만 체크하도록 함
        const checkParams = [
            `id`
            // , `pw`, `nickname`
        ];

        for (let prop of checkParams) {
            console.log(params[prop])
            if (false === (prop in params)) {
                throw new Error(`Missing parameter : ${prop}`);
            }
            if (params[prop].length === 0) {
                throw new Error(`No input parameter : ${prop}`);
            }
            // this.id / this.pw / this.nickname 
            this[prop] = params[prop];
        }

        for (let key in this.__list) {
            const memberInfo = this.__list[key]
            if (params.id === memberInfo.id) {
                // JavaScript 는 destructor 가 없고, 대신 null 로 할당해주면 GC가 알아서 삭제함
                this.__list[key] = null;
                return;
            }
        }

        return null;
    }
}