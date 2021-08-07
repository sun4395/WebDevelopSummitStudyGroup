function callback_msTimer(idx, ms, callback) {
    setTimeout(function() {
        console.log(`${idx} 번째 함수 호출`);
        // 코드 추가
        try {
            if  (idx === 18) {
                console.log("idx is "+ idx)
                throw new Error(idx / 0) // divide 0 이 에러가 아니라니!
            }
            callback(null, {index: idx, sec: ms});
        } catch(err) {
            callback(err, {index: idx, sec: ms});
        }
    }, ms);
}

function promise_msTimer(idx, ms) {
    return new Promise(function (resolve, reject) {    
        setTimeout(function() {
            console.log(`${idx} 번째 함수 호출`);
            // 코드 추가
            try {
                if  (idx === 18 || idx === 3) {
                    console.log("idx is "+ idx)
                    throw new Error(idx / 0) // divide 0 이 에러가 아니라니!
                }
                console.log(`idx ${idx} calls resolve`)
                resolve({index: idx, sec: ms});
            } catch(err) {
                console.log(`idx ${idx} calls reject`)
                reject({index: idx, sec: ms, error: err});
            }
        }, ms);
    });
}


function getRandomMS() {
    // Gets random 100 ~ 499 ms
    return parseInt(100 + Math.random() * 400);
}


function msTimerCallback() { 
    // 코드 추가
    console.log("Callback starts")
    i = 1;
    callback_msTimer(i++, getRandomMS(), function(err, data){
        console.log(`err : ${err}`);
        console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
        callback_msTimer(i++, getRandomMS(), function(err, data){
            console.log(`err : ${err}`);
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            callback_msTimer(i++, getRandomMS(), function(err, data){
                console.log(`err : ${err}`);
                console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                callback_msTimer(i++, getRandomMS(), function(err, data){
                    console.log(`err : ${err}`);
                    console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                    callback_msTimer(i++, getRandomMS(), function(err, data){
                        console.log(`err : ${err}`);
                        console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                        callback_msTimer(i++, getRandomMS(), function(err, data){
                            console.log(`err : ${err}`);
                            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                            callback_msTimer(i++, getRandomMS(), function(err, data){
                                console.log(`err : ${err}`);
                                console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                callback_msTimer(i++, getRandomMS(), function(err, data){
                                    console.log(`err : ${err}`);
                                    console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                    callback_msTimer(i++, getRandomMS(), function(err, data){
                                        console.log(`err : ${err}`);
                                        console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                        callback_msTimer(i++, getRandomMS(), function(err, data){
                                            console.log(`err : ${err}`);
                                            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                            callback_msTimer(i++, getRandomMS(), function(err, data){
                                                console.log(`err : ${err}`);
                                                console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                callback_msTimer(i++, getRandomMS(), function(err, data){
                                                    console.log(`err : ${err}`);
                                                    console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                    callback_msTimer(i++, getRandomMS(), function(err, data){
                                                        console.log(`err : ${err}`);
                                                        console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                        callback_msTimer(i++, getRandomMS(), function(err, data){
                                                            console.log(`err : ${err}`);
                                                            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                            callback_msTimer(i++, getRandomMS(), function(err, data){
                                                                console.log(`err : ${err}`);
                                                                console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                                callback_msTimer(i++, getRandomMS(), function(err, data){
                                                                    console.log(`err : ${err}`);
                                                                    console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                                    callback_msTimer(i++, getRandomMS(), function(err, data){
                                                                        console.log(`err : ${err}`);
                                                                        console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                                        callback_msTimer(i++, getRandomMS(), function(err, data){
                                                                            console.log(`err : ${err}`);
                                                                            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                                            callback_msTimer(i++, getRandomMS(), function(err, data){
                                                                                console.log(`err : ${err}`);
                                                                                console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                                                callback_msTimer(i++, getRandomMS(), function(err, data){
                                                                                    console.log(`err : ${err}`);
                                                                                    console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function msTimerPromise() {
    // 코드 추가
    console.log("Promise starts")
    promise_msTimer(1, getRandomMS())
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(2, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(2, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(3, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(3, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(4, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(4, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(5, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(5, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(6, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(6, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(7, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(7, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(8, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(8, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(9, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(9, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(10, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(10, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(11, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(11, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(12, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(12, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(13, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(13, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(14, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(14, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(15, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(15, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(16, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(16, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(17, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(17, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(18, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(18, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(19, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(19, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(20, getRandomMS())
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
            return promise_msTimer(20, getRandomMS())
        })
        .then(function(data) {
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
        })
        .catch(function(data) {
            console.log(`data: ${data.index}th function ends with error ${data.error}, after ${data.sec} ms`)
        })
}

async function msTimerAsyncAwait() {
    console.log("async starts")
    for (let i = 1; i < 21; i++){
        try {
            let data = await promise_msTimer(i, getRandomMS())
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
        } catch (err) {
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
        }
    }
}

msTimerCallback()
msTimerPromise()
msTimerAsyncAwait()
