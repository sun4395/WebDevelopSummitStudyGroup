const webSocketServer = require(`ws`).WebSocketServer;

function start(_port) {

    const wss = new webSocketServer({ port: _port });   // server open
    wss.on('connection', function connection(ws) {
        // client id 부여
        
        ws.on('message', function incoming(message) {
            console.log(message.toString());

            ws.send(message.toString());
        });

    });
}

exports.start = start;