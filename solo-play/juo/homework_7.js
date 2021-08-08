function callback_msTimer(idx, ms, callback) {
    setTimeout(function() {
        console.log(`${idx} 번째 함수 호출`);
        callback();
    }, ms);
}

function promise_msTimer(idx, ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log(`${idx} 번째 함수 호출`);
            resolve();
        }, ms);
    });
}

function getRandomMS() {
    // Gets random 100 ~ 499 ms
    return parseInt(100 + Math.random() * 400);
}

function msTimerCallback() {
    callback_msTimer(1, getRandomMS(), () => {
        callback_msTimer(2, getRandomMS(), () => {
            callback_msTimer(3, getRandomMS(), () => {
                callback_msTimer(4, getRandomMS(), () => {
                    callback_msTimer(5, getRandomMS(), () => {
                        callback_msTimer(6, getRandomMS(), () => {
                            callback_msTimer(7, getRandomMS(), () => {
                                callback_msTimer(8, getRandomMS(), () => {
                                    callback_msTimer(9, getRandomMS(), () => {
                                        callback_msTimer(10, getRandomMS(), () => {
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}

function msTimerPromise() {
    promise_msTimer(1, getRandomMS())
    .then(() => promise_msTimer(2, getRandomMS()))
    .then(() => promise_msTimer(3, getRandomMS()))
    .then(() => promise_msTimer(4, getRandomMS()))
    .then(() => promise_msTimer(5, getRandomMS()))
    .then(() => promise_msTimer(6, getRandomMS()))
    .then(() => promise_msTimer(7, getRandomMS()))
    .then(() => promise_msTimer(8, getRandomMS()))
    .then(() => promise_msTimer(9, getRandomMS()))
    .then(() => promise_msTimer(10, getRandomMS()))
    .catch(reason => console.error(`Failed by some reason ${reason}`));
}

async function msTimerAsyncAwait() {
    try {
        await promise_msTimer(1, getRandomMS());
        await promise_msTimer(2, getRandomMS());
        await promise_msTimer(3, getRandomMS());
        await promise_msTimer(4, getRandomMS());
        await promise_msTimer(5, getRandomMS());
        await promise_msTimer(6, getRandomMS());
        await promise_msTimer(7, getRandomMS());
        await promise_msTimer(8, getRandomMS());
        await promise_msTimer(9, getRandomMS());
        await promise_msTimer(10, getRandomMS());
    } catch (e) {
        console.error(`Failed by some reason ${e}`);
    }
}
