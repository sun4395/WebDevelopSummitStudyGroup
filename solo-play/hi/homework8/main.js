// main.js Example

// 보통 require() 를 제일 위에 다 쓰고 그 아래부터 코드 작성합니다. (C의 #include 처럼)
console.log(`Hello!`);
const server = require(`./server.js`);

(function() {
    console.log(`call server start`)
    server.start({
        port: 12345
    });
})();