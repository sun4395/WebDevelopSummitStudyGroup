let num1 = 12345;
let num2 = num1;
num2 = NaN;

console.log(num1);
console.log(num2);
console.log(num1 === num2);

// Number 는 Primitive value 로 수정시 새 주소 할당되어 불일치 (정상)

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2 = [999, 888, 777, 666, 555];

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

// arr2 에 새로운 Array 를 할당한 것으로 주소 변경되어 arr1 과 불일치(정상)


let obj1 = {
    a : 1,
    b : 2
};

let obj2 = obj1;

obj2.a = 1234567;
obj2.b = NaN;

console.log(obj1);
console.log(obj2);

console.log(obj1 === obj2);

// obj1 과 obj2 가 같은 주소값을 가리키고 있어 Object 내부 값 수정시 obj1, obj2 모두 변경되고 주소값도 동일
// obj2 가 obj1 과 별개의 객체가 되려면 Deepcopy 필요
// ex) obj2 = JSON.parse(JSON.stringify(obj1)); 