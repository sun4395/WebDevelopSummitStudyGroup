/////////////////// Queue ///////////////////////

class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue() {
        return this._arr.shift();
    }
    printAll() {
        console.log(this._arr);
    }
}

queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.printAll();
console.log("Queue dequeue : " + queue.dequeue());
console.log("Queue dequeue : " + queue.dequeue());


/////////////////// Stack ///////////////////////

class Stack {
    constructor() {
        this._arr = [];
    }
    push(item) {
        this._arr.unshift(item);
    }
    pop() {
        return this._arr.shift();
    }
    printAll() {
        console.log(this._arr);
    }
}

stack = new Stack();
stack.push(1);
stack.push(2);
stack.printAll();
console.log("Stack Pop : " + stack.pop());
console.log("Stack Pop : " + stack.pop());


/////////////////// Map ///////////////////////

class Map {
    constructor() {
        this._arr = [];
    }
    set(key, value) {
        this._arr.push([key, value]);
    }
    get(key) {
        for (let item of this._arr) {
            if (item[0] == key) {
                return item[1];
            }
        }
        throw new Error(`key ${key} is not exist`);
    }
    containsKey(key) {
        for (let item of this._arr) {
            if (item[0] == key) {
                return true;
            }
        }
        return false;
    }
    printAll() {
        console.log(this._arr);
    }
}

map = new Map();
map.set("key1", 1);
map.printAll();
if (map.containsKey("key1")) {
    console.log("Map Get: " + map.get("key1"));
}

/////////////////// Set ///////////////////////

class Set {
    constructor() {
        this._arr = [];
    }
    add(item) {
        if (this.has(item) == false) {
            this._arr.push(item);
        }
    }
    has(item) {
        for (let value of this._arr) {
            if (value == item) {
                return true;
            }
        }
        return false;
    }
    delete(item) {
        if (this.has(item) == true) {
            const idx = this._arr.indexOf(item);
            if (idx > -1) this._arr.splice(idx, 1);
        }
    }
    printAll() {
        console.log(this._arr);
    }
}

set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.printAll();

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 입력한 배열을 랜덤하게 섞습니다. 호출 시 마다 랜덤하게 섞인 배열이 리턴됩니다.
/////////////////////////////////////////////////////////////////////////////////////////////////////

function shuffleArray(arr) {
    let _shuffleArr;
    _shuffleArr = JSON.parse(JSON.stringify(arr));
    _shuffleArr.sort(() => Math.random() - 0.5);
    return _shuffleArr;
}

arr = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i<= 5; i++) {
    console.log(shuffleArray(arr));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 입력한 배열에서 랜덤한 n개의 엘리먼트를 뽑아내어 배열로 리턴합니다.
// 동일한 인덱스의 엘리먼트는 뽑지 않습니다.
/////////////////////////////////////////////////////////////////////////////////////////////////////

function pickRandomElementsFromArr(arr, n) {
    let pickArr = [];
    pickArr = shuffleArray(arr).splice(0, n);
    return pickArr;
}
arr = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i<= 5; i++) {
    console.log(pickRandomElementsFromArr(arr, i+1));
}