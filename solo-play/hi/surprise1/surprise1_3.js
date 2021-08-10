// 1 출력:
// 12345
// NaN
// false
let num1 = 12345;
let num2 = num1;
num2 = NaN;

console.log(num1);
console.log(num2);
console.log(num1 === num2);

// 2 출력
// [ 1, 2, 3, 4, 5 ]
// [ 999, 888, 777, 666, 555 ]
// false
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2 = [999, 888, 777, 666, 555];

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

// 3 출력
// { a: 1234567, b: NaN }
// { a: 1234567, b: NaN }
// true
let obj1 = {
    a : 1,
    b : 2
}

let obj2 = obj1;

obj2.a = 1234567;
obj2.b = NaN;


console.log(obj1);
console.log(obj2);

console.log(obj1 === obj2);

// 이상한 점: 
// 1, 2의 경우 보통 예상한 바와 같이 arr2만 새로운 값으로 업데이트 됨
// 3의 경우는 obj2를 바꿨는데 obj1의 값도 함께 업데이트됨
// object의 경우 obj2 = obj1과 같이 할당하면 shallow copy 가 일어난다.
// 이로 인해, 두 변수가 같은 객체 주소를 바라보게 됨으로써 위와 같이 동시에 수정되는 듯한 기현상을 보인다
// 이는 객체의 불변성을 깨뜨리고 버그를 유발할 수있으므로 deep copy가 되도록 해주는 것이 좋다

// 3-1 deep copy로 수정
// 출력:
// { a: 1, b: 2 }
// { a: 1234567, b: NaN }
// false
let assign_obj1 = {
    a : 1,
    b : 2
}

let assign_obj2 = Object.assign({}, assign_obj1);

assign_obj2.a = 1234567;
assign_obj2.b = NaN;


console.log(assign_obj1);
console.log(assign_obj2);

console.log(assign_obj1 === assign_obj2);


// 다만 이것도 함정이 있다
// 객체 안의 객체 property는 deep copy가 일어나지 않는다
// 그래서 더 엄청난 혼돈을 가져다 준다
let assign_obj3 = {
    a : 1,
    b : {
        c: 2
    }
}

let assign_obj4 = Object.assign({}, assign_obj3);

assign_obj4.b.c = 1234567;


console.log(assign_obj3);
console.log(assign_obj4);

console.log(assign_obj3 === assign_obj4);
console.log(assign_obj3.b.c === assign_obj4.b.c);


// 커스텀 재귀함수 만들기 혹은 모듈 (lodash, jquery) 사용하여 근본적으로 해결 할 수 있다
// js파일만으로 import 하는 법을 모르겠어서.. 커스텀 함수로 만들어보았다
function deep_copy(source) {
    if (source === null || typeof(source) !== "object") {
        return source;
    }
    let dest = {};
    for (let key in source) {
        dest[key] = deep_copy(source[key])
    }
    return dest;
}

let copy_obj1 = {
    a : 1,
    b : {
        c: 2
    }
}

let copy_obj2 = deep_copy(copy_obj1)

copy_obj2.b.c = 1234567;


console.log(copy_obj1);
console.log(copy_obj2);

console.log(copy_obj1 === copy_obj2);
console.log(copy_obj1.b.c === copy_obj2.b.c);


