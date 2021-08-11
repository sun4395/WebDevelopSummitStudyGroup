const Queue = {
    "_items": [],
    enqueue: function(item) {
        this._items.push(item)
    },
    dequeue: function(){
        return this._items.shift()
    }
}

const Stack = {
    "_items": [],
    push: function(item) {
        this._items.push(item)
    },
    pop: function(){
        return this._items.pop()
    }
}

const Map = {
    "_items": {},
    put: function(key, value) {
        this._items[key] = value;
    },
    get: function(key){
        return this._items[key];
    },
    containsKey: function(key){
        return key in this._items
    },
    containsValue: function(value){
        for (let key in this._items) {
            if(this._items[key] == value) return true;
        }
        return false;
    },
    keys: function() {
        return Object.keys(this._items)
    },
    values: function() {
        return Object.values(this._items)
    },
    remove: function() {
        delete this._items[key]
    },
    clear: function() {
        for (let key in this._items){
            delete this._items[key]
        }
    },
    size: function() {
        return this.keys().length;
    },
    isEmpty: function(){
        return this.size() == 0;
    }
}

const Set = {
    "_items": [],
    add: function(item) {
        let pos = this._items.indexOf(item)
        if (pos == -1) {
            this._items.push(item)
        }
    },
    has: function(item) {
        let pos = this._items.indexOf(item)
        return (pos > -1);
    },
    delete: function(item) {
        let pos = this._items.indexOf(item)
        return this._items.splice(pos, 1)
    }
}


// 입력한 배열을 랜덤하게 섞습니다. 호출 시 마다 랜덤하게 섞인 배열이 리턴됩니다.
function shuffleArray(arr) {
    let _shuffleArr;
    
    _shuffleArr = arr.slice()
    _shuffleArr.sort(() => Math.random() - 0.5)
    return _shuffleArr
}

// 입력한 배열에서 랜덤한 n개의 엘리먼트를 뽑아내어 배열로 리턴합니다.
// 동일한 인덱스의 엘리먼트는 뽑지 않습니다.
function pickRandomElementsFromArr(arr, n) {
    let pickArr = [];
    
    /* 코드 추가 */
    pickArr = shuffleArray(arr).slice(0, n)
    return pickArr;
}

function getRandomInt(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min)) + min;
}


var demoArray = [1, 3, 5,7,9,11,13];
shuffle = shuffleArray(demoArray);
console.log(shuffle);
console.log(pickRandomElementsFromArr(demoArray, 4))