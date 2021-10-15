const
    http = require(`http`),
    fs = require(`fs`);

class ServerManager {
    static start(params) {
        if (typeof params.port !== `number`) {
            throw new Error(`Parameter port is not a number`);
        }

        http.createServer(function (request, response) {

            let requestFile = `./public/${request.url}`;
            if (request.url === `/`) {
                requestFile = `./public/index.html`;
            }

            console.log(requestFile + ` : ` + fs.existsSync(`${requestFile}`))

            if (true === fs.existsSync(`${requestFile}`)) {
                response.writeHead(200);
                fs.createReadStream(`${requestFile}`).pipe(response);
            } else {
                response.writeHead(404);
                response.end('Not found');
            }
        }).listen(params.port);
    }
}

module.exports = ServerManager;