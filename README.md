# HDLC

Simple HDLC library using NodeJS.

### Installation
```sh
$ npm install HDLC
```

### Usage
import HDLC
```
const hdlc = require('hdlc');
```

Initialize 
```
hdlc.init(sendbyte);
hdlc.on('newFrame', router);

function sendbyte(data) {
  console.log(data);
}

function router(frame) {
  console.log(frame);
}
```

To send
```
hdlc.sendFrame(messageBytes);
```

To receive
```
hdlc.byteReceiver(messageFrame);
```

