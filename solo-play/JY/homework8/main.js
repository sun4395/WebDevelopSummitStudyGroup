// main.js Example

const server = require(`./server.js`);

(function () {
    server.start({
        port: 12345
    });
})();