const assert = require("assert");
const hdlc = require('../index');

var messageType = 4;
var message;
var messageFrame = [0x7E, 0x04, 0x74, 0xA1, 0x7E];
var messageFrameCount = 0;


describe("Testing HDCL", () => {
  it("should encode msg into frame", () => {
    hdlc.init(sendbyte);

    var messageBytes = message ? Array.from(message) : [];
    messageBytes.unshift(messageType);
    
    hdlc.sendFrame(messageBytes);
    assert.equal(messageFrameCount,messageFrame.length);
  });

  it("should decode frame into msg", () => {
    hdlc.on('newFrame', router);
    hdlc.byteReceiver(messageFrame);
  });
});

function sendbyte(data) {
  dataBuffer = Buffer.from([data]);
  messageFrameBuffer = Buffer.from([messageFrame[messageFrameCount]]);
  assert.deepEqual(dataBuffer,messageFrameBuffer);
  messageFrameCount++;
}

function router(frame) {
  if (frame.length > 0) {
      var type = frame.shift();
      assert.equal(type,messageType);
  }else{
    throw new Error("frame not valid!");
  }
}