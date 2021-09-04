const http = require(`http`);
const fs = require(`fs`);

const hostname = `127.0.0.1`;

const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.eot': 'aplication/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt',
};

function start(port) {
  function onError(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write(`Error 404: Resource not found`);
    response.end();
  }

  function onRequest(request, response) {
    const { headers, method, url } = request;

    switch (url) {
      case `/`:
        response.writeHead(200, { 'Content-Type': mimeType['.html'] });
        fs.createReadStream(`./front/index.html`).pipe(response);
        break;
        // 실행되지 않는 무의미한 코드는 삭제 필요합니다.
        fs.create;
      // 이 아래의 모든 case문부터는 모두 default: 로 처리 가능합니다.
      /*
      default:
        // 요청받은 URL 에 대응되는 파일의 경로 리턴하는 함수 (구현 필요)
        const filePath = getFilePath(url); 
        if (false === fs.existsSync()) {
          // 클라이언트가 요청한 파일이 없을 때 처리 로직 추가
        }
        else {
          // 주소의 확장자를 얻음
          const extension = path.extname(url);
          response.writeHead(200, { 'Content-Type': mimeType[extension] });
          fs.createReadStream(filePath).pipe(response);
        }
       */
      case `/style.css`:
        response.writeHead(200, { 'Content-Type': mimeType['.css'] });
        fs.createReadStream(`./front/style.css`).pipe(response);
        break;
      case `/member.js`:
        response.writeHead(200, { 'Content-Type': mimeType['.js'] });
        fs.createReadStream(`./front/member.js`).pipe(response);
        break;
      case `/fonts/NanumBarunpenR.ttf`:
        response.writeHead(200, { 'Content-Type': mimeType['.ttf'] });
        fs.createReadStream(`./fonts/NanumBarunpenR.ttf`).pipe(response);
        break;
      default:
        onError(response);
    }
  }
  const server = http.createServer(onRequest).listen(port, hostname);

  server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });
}

exports.start = start;
