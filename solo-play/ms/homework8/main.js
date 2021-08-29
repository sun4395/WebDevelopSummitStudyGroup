const server = require(`./back/server`);

(function() {
    server.start({
        port : 8080
    });
})();