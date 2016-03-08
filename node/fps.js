var GT511C3 = require('gt511c3');

module.exports = function () {
  var fps = new GT511C3('/dev/ttyAMA0', { baudrate: 115200 });

  fps.busy = true;

  fps.init().then(
    function() {
      fps.ledONOFF(1)
      .then(function() {
        fps.busy = false;
      });
      console.log('FPS: init: OK!');
      console.log('FPS: firmware version: ' + fps.firmwareVersion);
      console.log('FPS: iso area max: ' + fps.isoAreaMaxSize);
      console.log('FPS: device serial number: ' + fps.deviceSerialNumber);
    },
    function(err) {
      error = fps.decodeError(err)
      console.log('FPS: init err: ' + error);
    }
  )

  return fps
};
