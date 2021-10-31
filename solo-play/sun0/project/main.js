// 웹 소켓 서버 실행 용도
const server = require(`./server/webSocketServer.js`);

(function() {
    server.start({
        port : 18080
    });
})();

// 나중에 front 를 서버를 통해 열어주도록 (homework 8)