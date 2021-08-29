const http = require(`http`);
const fs = require(`fs`);

const hostname = `127.0.0.1`;

const mimeType = {
    ".ico": "image/x-icon",
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".eot": "aplication/vnd.ms-fontobject",
    ".ttf": "aplication/font-sfnt",
  }

function start(port) {
    function onRequest(request, response) {
        const { headers, method, url } = request;

        switch(url) {
            case `/`: 
                response.writeHead(200, {'Content-Type': mimeType[".html"]});
                fs.createReadStream(`./front/index.html`).pipe(response);
                break;
            case `/style.css`:
                response.writeHead(200, {'Content-Type':mimeType[".css"]});
                fs.createReadStream(`./front/style.css`).pipe(response);
                break;
            case `/member.js`:
                response.writeHead(200, {'Content-Type':mimeType[".js"]});
                fs.createReadStream(`./front/member.js`).pipe(response);
                break;
            case `/fonts/NanumBarunpenR.ttf`:
                response.writeHead(200, {'Content-Type': mimeType[".ttf"]});
                fs.createReadStream(`./fonts/NanumBarunpenR.ttf`).pipe(response);
                break;
        }

    }
    const server = http.createServer(onRequest).listen(port, hostname);
    
}

exports.start = start;