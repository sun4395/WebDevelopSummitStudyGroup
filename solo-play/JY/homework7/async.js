function callback_msTimer(idx, ms, callback) {
    setTimeout(function () {
        console.log(`${idx} 번째 함수 호출`);
        callback();
    }, ms);
}

function promise_msTimer(idx, ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
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
    // 배열에 함수를 넣어 콜백 지옥을 우회할 수 있는 방법
    try {
        const timerArrayFunc = [];
        for (let i = 0; i < 20; i++) {
            timerArrayFunc.push(function () {
                if (i !== timerArrayFunc.length - 1) {
                    callback_msTimer(i, getRandomMS(), timerArrayFunc[i + 1]);
                } else {
                    callback_msTimer(i, getRandomMS(), function () {
                        /* End of callback loop */
                    });
                }
            });
        }

        // 콜백 루프 시작
        timerArrayFunc[0]();

    } catch (err) {
        console.error(err);
    }
}

function msTimerPromise() {
    promise_msTimer(0, getRandomMS())
        .then(function () { promise_msTimer(0, getRandomMS())} )
        .then(function () { promise_msTimer(1, getRandomMS())} )
        .then(function () { promise_msTimer(2, getRandomMS())} )
        .then(function () { promise_msTimer(3, getRandomMS())} )
        .then(function () { promise_msTimer(4, getRandomMS())} )
        .then(function () { promise_msTimer(5, getRandomMS())} )
        .then(function () { promise_msTimer(6, getRandomMS())} )
        .then(function () { promise_msTimer(7, getRandomMS())} )
        .then(function () { promise_msTimer(8, getRandomMS())} )
        .then(function () { promise_msTimer(9, getRandomMS())} )
        .then(function () { promise_msTimer(10, getRandomMS())} )
        .then(function () { promise_msTimer(11, getRandomMS())} )
        .then(function () { promise_msTimer(12, getRandomMS())} )
        .then(function () { promise_msTimer(13, getRandomMS())} )
        .then(function () { promise_msTimer(14, getRandomMS())} )
        .then(function () { promise_msTimer(15, getRandomMS())} )
        .then(function () { promise_msTimer(16, getRandomMS())} )
        .then(function () { promise_msTimer(17, getRandomMS())} )
        .then(function () { promise_msTimer(18, getRandomMS())} )
        .then(function () { promise_msTimer(19, getRandomMS())} )
        .catch(function(err) {
            console.error(err);
        });
}

async function msTimerAsyncAwait() {
    try {

        for (let i = 0; i < 20; i++) {
            await promise_msTimer(i, getRandomMS());
        }
    } catch (err) {
        console.error(err);
    }
}