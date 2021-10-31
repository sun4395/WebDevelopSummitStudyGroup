class WebSocketClient {
    static ws;  // websocket server 변수

    static connect() {
        let self = this;

        return new Promise(function (resolve, reject) { 
            // Do something;
            
            self.ws = new WebSocket('ws://localhost:18080'); // 프로토콜 포맷은 ws:// 또는 wss:// 를 사용한다.

            // 연결이 되었을 때
            self.ws.onopen = function(evt) {
                resolve();

                /* ... */ 
                // 데이터는 기본적으로 문자열이며 send 함수를 사용한다.
                // Blob, ArrayBuffer 도 가능하나 보통 String 을 사용함
                self.ws.send(`정상적으로 연결되었습니다.`);
            }

            // 서버로부터 메시지가 올 때마다 
            self.ws.onmessage = function(evt) {
                /* ... */ 
                // 받는 메시지는 기본적으로 문자열
                console.log(evt.data);
                Chat.showMessageLog(evt.data);
            }

        });
    }

    static send(msg) {
        // 객체 포맷
        this.ws.send(msg);

    }

}