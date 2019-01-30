# HDLC

Simple HDLC library using NodeJS.

### Installation
```sh
$ npm install HDLC
```

### Usage
import HDLC
```
import { HDLC } from "hdlc";
const hdlc = new HDLC();
```

Initialize 
```
hdlc.init(sendbyte);
hdlc.eventEmitter.on('newFrame', router);

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

