const http = require(`http`);
const fs = require(`fs`);

const hostname = `127.0.0.1`;

function start(port) {
  http.createServer(function(req, res){
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Hello World\n');
  fs.readFile(`./front/homework_6.html`, 'utf8', (data, err) => {
      //if(err) throw err;
      //res.status(200);
      //res.setHeader('Content-Type', 'text/html');
      //res.sendDate(data);

      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(data, 'utf8');
      fs.createReadStream(`./front/homework_6.html`).pipe(res);

  });
  }).listen(port, hostname);

console.log('Server running at http://'+hostname+':'+port);
}

exports.start = start;