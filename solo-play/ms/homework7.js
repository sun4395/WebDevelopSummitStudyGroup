function callback_msTimer(idx, ms, callback) {
    setTimeout(function() {
        console.log(`${idx} 번째 함수 호출`);
        try {
            console.log(`waited ${ms} ms...`);
            callback(null, idx);
        } catch {
            callback("Error");
        }
    }, ms);
}


function promise_msTimer(idx, ms) {
    return new Promise(function (resolve, reject) {    
        setTimeout(function() {
            console.log(`${idx} 번째 함수 호출`);
            try {
                console.log(`waited ${ms} ms...`);
                resolve(idx);
            } catch {
                reject("Error");
            }
        }, ms);
    });
}


function getRandomMS() {
    // Gets random 100 ~ 499 ms
    return parseInt(100 + Math.random() * 400);
}




function msTimerCallback() {
    callback_msTimer(1, getRandomMS(), function(err, idx) { if (idx != undefined) { 
        callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
            callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                    callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                        callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                            callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                    callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                        callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                            callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                    callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                        callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                            callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                                callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                                    callback_msTimer(++idx, getRandomMS(),function(err, idx) { if (idx != undefined) {
                                                                        callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                                            callback_msTimer(++idx, getRandomMS(), function(err, idx) { if (idx != undefined) {
                                                                                callback_msTimer(++idx, getRandomMS(), function() {} ); } 
                                                                                    else { console.log(err); }} ); } 
                                                                                else { console.log(err); }} ); } 
                                                                            else { console.log(err); }} ); } 
                                                                        else { console.log(err); }} ); } 
                                                                    else { console.log(err); }} ); } 
                                                                else { console.log(err); }} ); } 
                                                            else { console.log(err); }} ); } 
                                                        else { console.log(err); }} ); } 
                                                    else { console.log(err); }} ); } 
                                                else { console.log(err); }} ); } 
                                            else { console.log(err); }} ); } 
                                        else { console.log(err); }} ); } 
                                    else { console.log(err); }} ); } 
                                else { console.log(err); }} ); } 
                            else { console.log(err); }} ); } 
                        else { console.log(err); }} ); } 
                    else { console.log(err); }})} 
                else { console.log(err); }})}
            else { console.log(err); }});
}

function msTimerPromise() {
    promise_msTimer(1, getRandomMS())
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .then(function(idx) { return promise_msTimer(++idx, getRandomMS()); })
        .catch("Error");
}

function msTimerAsyncAwait() {
    // 코드 추가
}
