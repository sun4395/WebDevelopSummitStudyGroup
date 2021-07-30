# 기습 과제 1

## 몸풀기

```css
@font-face {
    font-family: Koverwatch;
    src: url(./koverwatch-webfont-1f961d9e70.woff) format("woff");
}

body {
    font-family: Koverwatch;
}
```

## 1-1

- Queue
  - Put: `Array.prototype.push()`
  - Get: `Array.prototype.shift()`
- Stack
  - Push: `Array.prototype.push()`
  - Pop: `Array.prototype.pop()`
- Map
  - Use `Map` object
  - [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- Set
  - Use `Set` object
  - [Reference](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)

```javascript
// 입력한 배열을 랜덤하게 섞습니다. 호출 시 마다 랜덤하게 섞인 배열이 리턴됩니다.
function shuffleArray(arr) {
    return arr.sort((a, b) => Math.random() > 0.5);
}

// 입력한 배열에서 랜덤한 n개의 엘리먼트를 뽑아내어 배열로 리턴합니다.
// 동일한 인덱스의 엘리먼트는 뽑지 않습니다.
function pickRandomElementsFromArr(arr, n) {
    return shuffleArray(arr).slice(n);
}
```

## 1-2

- 객체는 함수를 제외하고 문자열화 및 복원됨.
- 객체가 아닌 값은 존재하는 값이면 어떻게든 문자열이 됨.
- 형식이 이상한 문자열은 파싱하면 `SyntaxError` 발생.

```javascript
const aPerson = {
    name: "juo",
    occupation: "Not a developer",
    age: 18,
    conversation: function () { console.log("It's not a bug, it's a feature.") },
    head: {
        count: 2,
        eye: {
            count: 3,
            laser: function () { console.log("히히 레이저발사") },
            see: function () { throw "불가능합니다" },
        },
        neck: {
            body: {
                arm: {
                    count: 2,
                    launchRocket: function () {
                        if (this.count <= 0) {
                            throw "불가능합니다";
                            return;
                        }

                        this.count--;
                        console.log(`남은 팔 ${this.count}개`);
                    }
                },
                leg: {
                    count: 1,
                }
            }
        }
    }
}

const s = JSON.stringify(aPerson);
const o = JSON.parse(s);
```

## 1-3

number가 값 타입이므로 복사되는 게 정상임.

```javascript
let num1 = 12345;
let num2 = num1;
num2 = NaN;

console.log(num1);
console.log(num2);
console.log(num1 === num2);
```

`arr2`에 새 배열의 참조를 할당한 것이므로 `arr1`은 그대로임.

```javascript
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2 = [999, 888, 777, 666, 555];

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);
```

`obj2`가 `obj1`의 참조를 가졌으므로 둘은 같은 메모리 공간을 가르킴. 만약 `obj1`의 객체가 복사되어 전혀 다른 인스턴스가 `obj2`에 할당되기를 원했으면 깊은 복사를 하면 됨. 여기서는 nested object가 없으므로 `let obj2 = {...obj1};` 등으로 가능.

```javascript
let obj1 = {
    a : 1,
    b : 2,
}

let obj2 = obj1;

obj2.a = 1234567;
obj2.b = NaN;

console.log(obj1);
console.log(obj2);

console.log(obj1 === obj2);
```

## 1-4, 1-5

```javascript
/**
 * Returns if the give IP address is valid.
 * @param {string} ipAddress - IP string
 * @param {number} ipVersion - IP version, 4 or 6
 * @returns {boolean} true if the IP address format is valid for the given version, othrwise false.
 */
function isValidIpAddress(ipAddress, ipVersion) {
    try {
        if (ipVersion === 4) {
            return new RegExp(
                "^([01]?\\d?\\d|2[0-4]\\d|25[0-5])\\."
                + "([01]?\\d?\\d|2[0-4]\\d|25[0-5])\\."
                + "([01]?\\d?\\d|2[0-4]\\d|25[0-5])\\."
                + "([01]?\\d?\\d|2[0-4]\\d|25[0-5])$")
                .test(ipAddress);
        }
        else if (ipVersion === 6) {
            return new RegExp(
                "(^::$)|"
                + "(^:(((:[\\da-fA-F]{1,4}){1,7})|:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){1}((:[\\da-fA-F]{1,4}){1,6})|:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){2}((:[\\da-fA-F]{1,4}){1,5})|:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){3}((:[\\da-fA-F]{1,4}){1,4})|:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){4}((:[\\da-fA-F]{1,4}){1,3})|:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){5}((:[\\da-fA-F]{1,4}){1,2})|:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){6}((:[\\da-fA-F]{1,4}){1,1})|:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){7}:)$)|"
                + "(^(([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4}){1})$)")
                .test(ipAddress);
        } else {
            throw "Wrong IP version";
        }
    } catch (e) {
        console.error(e);
    }
    return false;
}
```
