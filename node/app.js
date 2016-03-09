// DPENDENCIES (global)
var Promise = require('bluebird');
var Redis = require('ioredis');

//// INITIALIZERS
var fps = require('./fps')();
var lcdlib = require('./lcd')();
var lcd = lcdlib.lcd;
var Gpio = lcdlib.gpio;
var io = require('./server')();

//// HELPERS
var addPrint = require('./addPrint');
var deletePrint = require('./deletePrint');


//// REDIS
var pub = new Redis();
var sub = new Redis();
// sub.subscribe('fingerprintAdded', function (err, count) {
//   pub.publish('fingerprintAdded', 'Hello World!');
// });

//// STATES
var addingPrint = false;

//// RELAY
relay = new Gpio(20, 'out');
doorSensor = new Gpio(13, 'in', 'falling')

var openDoor = function() {
  relay.write(1, function (err) {
    if (err) {
      throw err;
    }
  });
}

doorSensor.watch(function (err, value) {
  if (err) {
    throw err;
  }
  console.log(value)
  if (value === 1) {
    relay.write(0, function (err) {
      if (err) {
        throw err;
      }
    });
  }
});


//// WEBSOCKETS
io.on('connection', function (socket) {
  socket.on('addFingerprint', function(data) {
    addPrint(fps, pub, socket, data);
  });
  socket.on('deleteFingerprint', function(data) {
    deletePrint(fps, pub, socket, data);
  });

  socket.on('openDoor', function() {
    openDoor();
  });

});


//// CHECK FOR FINGER
var checkFinger = function() {
  if (!fps.busy) {
    fps.isPressFinger()
    .then(function() {
      lcd.put("   Processing\n      ...");
      return fps.captureFinger(0);
    })
    .then(function() {
      return fps.identify();
    })
    .then(function(ID) {
      if (ID > 0 && ID < 200) {// Identify successfull
        openDoor();
        console.log("identify: ID = " + ID);
        lcd.put("    Welcome\n Access Granted", 5);
        setTimeout(checkFinger, 3000);
      } else {// BAD ID (probably 0)
        console.log("got invalid id: " + ID);
        lcd.put("  YOU SHAL NOT\n      PASS", 5);
        setTimeout(checkFinger, 1000);
      }

    }, function(err) {
      if (err == 'finger is not pressed') { // Finger NOT pressed
        setTimeout(checkFinger, 10);
      } else { // Failed Identify
        console.log('identify eror: ' + err + ' ' + fps.decodeError(err));
        lcd.put("  YOU SHAL NOT\n      PASS", 5);
        setTimeout(checkFinger, 1000);
      }
    });
  } else { // FPS is busy
    setTimeout(checkFinger, 1000);
  }
};
setTimeout(checkFinger, 5000);


process.on('SIGINT', function() {
  relay.unexport();
  console.log("Goodbye...");
  process.exit();
});
