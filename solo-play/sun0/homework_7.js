function callback_msTimer(idx, ms, callback) {
    setTimeout(function() {
        console.log(`${idx} 번째 함수 호출`);
        // 코드 추가
		callback();
    }, ms);
}

function promise_msTimer(idx, ms) {
    return new Promise(function (resolve, reject) {    
        setTimeout(function() {
            console.log(`${idx} 번째 함수 호출`);
            // 코드 추가
			if(idx > 20)
				reject(new Error('index error.'));
			else
				resolve(idx);
        }, ms);
    });
}


function getRandomMS() {
    // Gets random 100 ~ 499 ms
    return parseInt(100 + Math.random() * 400);
}


function msTimerCallback() { 
    // 코드 추가
	console.log(`msTimerCallback func`);
	
	callback_msTimer(1, getRandomMS(), function() {
		callback_msTimer(2, getRandomMS(), function() {
			callback_msTimer(3, getRandomMS(), function() {
				callback_msTimer(4, getRandomMS(), function() {
					callback_msTimer(5, getRandomMS(), function() {
						callback_msTimer(6, getRandomMS(), function() {
							callback_msTimer(7, getRandomMS(), function() {
								callback_msTimer(8, getRandomMS(), function() {
									callback_msTimer(9, getRandomMS(), function() {
										callback_msTimer(10, getRandomMS(), function() {
											callback_msTimer(11, getRandomMS(), function() {
												callback_msTimer(12, getRandomMS(), function() {
													callback_msTimer(13, getRandomMS(), function() {
														callback_msTimer(14, getRandomMS(), function() {
															callback_msTimer(15, getRandomMS(), function() {
																callback_msTimer(16, getRandomMS(), function() {
																	callback_msTimer(17, getRandomMS(), function() {
																		callback_msTimer(18, getRandomMS(), function() {
																			callback_msTimer(19, getRandomMS(), function() {
																				callback_msTimer(20, getRandomMS(), function() {})
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
	});
	
	//callback_msTimer(19, getRandomMS(), function() { callback_msTimer(20, getRandomMS(), function() {})	});
	/*
		callback_msTimer(1, getRandomMS(), 
			callback_msTimer(2, getRandomMS(), 
				callback_msTimer(3, getRandomMS(), 
					callback_msTimer(4, getRandomMS(),
						callback_msTimer(5, getRandomMS(),
							callback_msTimer(6, getRandomMS(),
								callback_msTimer(7, getRandomMS(),
									callback_msTimer(8, getRandomMS(),
										callback_msTimer(9, getRandomMS(),
											callback_msTimer(10, getRandomMS(),
												callback_msTimer(11, getRandomMS(),
													callback_msTimer(12, getRandomMS(),
														callback_msTimer(13, getRandomMS(),
															callback_msTimer(14, getRandomMS(),
																callback_msTimer(15, getRandomMS(),
																	callback_msTimer(16, getRandomMS(),
																		callback_msTimer(17, getRandomMS(),
																			callback_msTimer(18, getRandomMS(),
																				callback_msTimer(19, getRandomMS(),
																					callback_msTimer(20, getRandomMS(), function() {}
																					)
																				)
																			)
																		)
																	)
																)
															)
														)
													)
												)
											)
										)
									)
								)
							)
						)
					)
				)
			)
		);*/
}

function msTimerPromise() {
    // 코드 추가
	console.log(`msTimerPromise func`);
	promise_msTimer(1, getRandomMS()).then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} )
	.then(function(idx) {return promise_msTimer(++idx, getRandomMS());} );
}

async function msTimerAsyncAwait() {
    // 코드 추가
	
	try{
		//for(i = 1; i<= 20; i++)
		//	await promise_msTimer(i, getRandomMS());
		let ret = 0;
		for(i = 0; i < 20; i++)
			ret = await promise_msTimer(++ret, getRandomMS());

	}catch(err) {
		console.error(err);
	}
}
