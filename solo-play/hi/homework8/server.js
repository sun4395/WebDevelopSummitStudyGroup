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
        // mainPath 앞에 let / const 을 붙여서 Global 변수가 되는 걸 방지해야 합니다.
        mainPath = path.resolve('static','index.html');
        // 휴먼 에러 방지를 위해 뒤에 ; 꼭 붙일 것
        await makeResponseForFile(mainPath, response)
    } else {
        console.log(`request url = ${request.url}`)
        // filePath 앞에 let / const 을 붙여서 Global 변수가 되는 걸 방지해야 합니다.
        filePath = path.join(path.resolve(),'static', request.url);
        // 휴먼 에러 방지를 위해 뒤에 ; 꼭 붙일 것
        await makeResponseForFile(filePath, response)
    };
}

// 내부에 await 이 없고 Promise 리턴을 하지 않는데 async 선언 / await 사용할 필요가 없습니다.
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

// URL 은 원래 소문자가 일반적이나 대문자로 오는것도 고려합니다. (String.toLowerCase() 같은 걸 이용하여 대소문자 모두 구분)
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
