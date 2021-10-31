const http = require(`http`);
const fs = require(`fs`);

const hostname = `127.0.0.1`;

function start(port) {
  http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end('Hello World\n');
    console.log(req.url);
    
    if(req.url === '/')
    {
      req.url += 'index.html';
    }
    fs.readFile(`./front`+req.url, 'utf8', function (err, data) {
      if(err) 
      {
        res.writeHead(404);
        res.end("error..", 'utf8');
        return;
      }
      //res.status(200);
      //res.setHeader('Content-Type', 'text/html');
      //res.sendDate(data);
      
      //res.writeHead(200, { 'Content-Type': 'text/html' });
      res.writeHead(200);
      res.end(data, 'utf8');

    });
  }).listen(port, hostname);

  console.log('Server running at http://' + hostname + ':' + port);
}

exports.start = start;