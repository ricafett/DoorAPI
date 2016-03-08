module.exports = function(fps, pub, socket, data) {
  var id;
  var step = -1;
  var progress;
  var lcdMessage, webMessage;

  var getId = function() {
    return new Promise(function(resolve, reject) {
      var i = 1;
      function nextStep() {
        if (i > 199) {
          reject('FPS full');
        } else {
          fps.checkEnrolled(i)
          .then(function() { // USED
            //console.log('id ' + i + ' used');
            i++;
            nextStep();
          }, function(err) {
            if (err == fps.NACK_IS_NOT_USED) { // FREE
              id = i;
              data.newPrintId = id;
              console.log('Using id: ' + id);
              resolve();
            } else {
              console.log('Error getting id: ' + fps.decodeError(err));
              reject(err);
            }
          });
        }
      }
      nextStep();
    });
  }
  var checkId = function() {
    return fps.checkEnrolled(id).then(function() {
			console.log('ERROR: ID: ' + id + ' is already enrolled!');
		}, function(err) {
			console.log('ID ' + id + ' available: ' + fps.decodeError(err));
		});
  }
  var start = function() {
    return fps.enrollStart(id)
  }
  var capture = function() {
    return fps.captureFinger(fps.BEST_IMAGE);
  };
  var waitFinger = function() {
    return fps.waitFinger(15000);
  };
  var waitReleaseFinger = function() {
    return fps.waitReleaseFinger(10000);
  };
  var enroll_delay = function() {
    return (new Promise(function(resolve, reject) {
      setTimeout(resolve, 500);
    }));
  };
  var updateStatus = function() {
    socket.emit('addFingerprintUpdate', { status: webMessage, progress: progress});
    return lcd.put2(lcdMessage);
  };
  var nextStep = function() {
    step++;
    switch (step) {
      case 0:
        lcdMessage = '   Loading...'
        webMessage = 'Loading'
        progress = 0
        break;
      case 1:
        lcdMessage = '1/5 Press Finger'
        webMessage = 'Place the finger in the sensor'
        progress = 16
        break;
      case 2:
        lcdMessage = '2/5 Lift Finger'
        webMessage = 'Remove the finger off the sensor'
        progress = 32
        break;
      case 3:
        lcdMessage = '3/5 Press Finger'
        webMessage = 'Place the finger in the sensor'
        progress = 48
        break;
      case 4:
        lcdMessage = '4/5 Lift Finger'
        webMessage = 'Remove the finger off the sensor'
        progress = 64
        break;
      case 5:
        lcdMessage = '5/5 Press Finger'
        webMessage = 'Place the finger in the sensor'
        progress = 80
        break;
      case 6:
        lcdMessage = 'Enroll Complete!'
        webMessage = 'Fingerprint added successfully! You may remove the finger.'
        progress = 100
        break;
      default:
        //ignore
    }
    return updateStatus();
  }

  //return new Promise(function (resolve, reject) {
    console.log("Registering new Fingerprint");
    lcd.busy = true;
    fps.busy = true;

    lcd.put("New Fingerprint")
    .then(enroll_delay)
    .then(function() {
      return nextStep();
    })
      .then(getId)
      .then(checkId)
      .then(function() {
        return nextStep();
      })
      .then(waitFinger)
      .then(start)
      .then(capture)
      .then(function() {
        return fps.enroll1();
      })
      .then(function() {
        return nextStep();
      })
      .then(waitReleaseFinger)

    .then(enroll_delay)

    .then(function() {
      return nextStep();
    })
      .then(waitFinger)
      .then(capture)
      .then(function() {
        return fps.enroll2();
      })
      .then(function() {
        return nextStep();
      })
      .then(waitReleaseFinger)

    .then(enroll_delay)

    .then(function() {
      return nextStep();
    })
      .then(waitFinger)
      .then(capture)
      .then(function() {
        return fps.enroll3();
      })

    .then(function() { // Success
      nextStep();
      lcd.goHomeAfter(6);
      console.log('Enroll Complete');
      pub.publish('fingerprintAdded', JSON.stringify(data));
      lcd.busy = false;
      setTimeout(function () {
        fps.busy = false;
      }, 2000);
      resolve();
    }, function(err) { // Fail
      lcd.put2(' Enroll Failed');
      lcd.goHomeAfter(6);
      derr = fps.decodeError(err) || '';
      console.log('Enroll Failed: ' + err + ' ' + derr);
      var e = "It was not possible to add the fingerprint: " + err + ' ' + derr;
      lcd.busy = false;
      setTimeout(function () {
        fps.busy = false;
      }, 2000);
      socket.emit('addFingerprintUpdate', { status: webMessage, progress: progress, error: e});
      resolve();
    });


  //}); // Promise

} // Export
