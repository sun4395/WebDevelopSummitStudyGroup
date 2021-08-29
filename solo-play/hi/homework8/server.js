const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);

async function onRequest(request, response) {
    console.log(`here!`)
    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', (err) => {
        console.error(err);
    });

    if(request.url === "/"){
        console.log("server received request '/'")
        mainPath = path.resolve('static','index.html');
        await makeResponseForFile(mainPath, response)
    } else {
        console.log(`request url = ${request.url}`)
        filePath = path.join(path.resolve(),'static', request.url);
        await makeResponseForFile(filePath, response)
    };
}

async function makeResponseForFile(filePath, response) {
    fs.readFile(filePath, 'utf-8', (err, result) => {
        if(err){
            console.log(`file read error for ${filePath} : \n` + error.message);
            response.statusCode = 500;
            response.end();
        }
        contentType = getContentType(filePath)
        response.writeHead(200, contentType);
        response.end(result);
    });
}

function getContentType(url){
    if(url.match("\.html$")) {
        return {'Content-Type':'text/html; charset=utf-8'};
    } else if(url.match("\.css$")) {
        return {'Content-Type':'text/css; charset=utf-8'};
    } else if(url.match("\.js$")) {
        return {'Content-Type':'text/javascript; charset=utf-8'};
    }
}

function start(info) {
    http.createServer(onRequest).listen(info.port, function() {
        console.log(`Server listens on port number ${info.port}`)
    });
}

exports.start = start;
