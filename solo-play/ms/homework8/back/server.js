const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);

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
};

function start(port) {
  function onError(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write(`Error 404: Resource not found`);
    response.end();
  }

  function onRequest(request, response) {
    const { headers, method, url } = request;

    switch (url) {
      case `/`:
        response.writeHead(200, { "Content-Type": mimeType[".html"] });
        fs.createReadStream(`./front/index.html`).pipe(response);
        break;
      case `/favicon.ico`:
        response.writeHead(200, { "Content-Type": mimeType[".ico"] });
        fs.createReadStream(`./favicon.ico`).pipe(response);
        break;
      default:
        // 요청받은 URL 에 대응되는 파일의 경로 리턴하는 함수
        const filePath = getFilePath(url);
        if (false === fs.existsSync(filePath)) {
          onError(response);
        } else {
          // 주소의 확장자를 얻음
          const extension = path.extname(url);
          response.writeHead(200, { "Content-Type": mimeType[extension] });
          fs.createReadStream(filePath).pipe(response);
        }
    }
  }
  const server = http.createServer(onRequest).listen(port, hostname);

  server.on("clientError", (err, socket) => {
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
  });
}

function getFilePath(url) {
  return "./front" + url;
}

exports.start = start;
