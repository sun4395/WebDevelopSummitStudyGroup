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
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .then(function(data){
            console.log(`data: ${data.index}th function ends after ${data.sec} ms`)
            return promise_msTimer(data.index + 1, getRandomMS())
        }, function(err){
            console.log(`data: ${err.index}th function ends with error ${err.error}, after ${err.sec} ms`)
            return promise_msTimer(err.index + 1, getRandomMS())
        })
        .catch(function(err){
            console.log(`Error occured : ${err}`)
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
