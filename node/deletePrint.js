module.exports = function(fps, pub, socket, data) {

  var delay = function() {
    return (new Promise(function(resolve, reject) {
      setTimeout(resolve, 500);
    }));
  };

  var deleteFromFPS = function(id) {
    fps.busy = true;
    delay()
    .then(function() {
      return fps.deleteID(id)
    })
    .then(function() {
			console.log('deleted ID: ' + id + ' deleted!');
      fps.busy = false;
      socket.emit('deleteFingerprintUpdate', { status: 'success'});
		}, function(err) {
      fps.busy = false;
      e = 'error deleting id: ' + id + ': ' + fps.decodeError(err);
			console.log(e);
      socket.emit('deleteFingerprintUpdate', { status: 'error', error: e});
		});
  }

  console.log('deleting print:');

  if (data.printN == 1) {
    console.log(data.user.fingerprint1);
    deleteFromFPS(data.user.fingerprint1);
    pub.publish('fingerprintDeleted', JSON.stringify(data));

  } else if (data.printN == 2) {
    console.log(data.user.fingerprint2);
    deleteFromFPS(data.user.fingerprint2);
    pub.publish('fingerprintDeleted', JSON.stringify(data));

  } else {
    socket.emit('deleteFingerprintUpdate', { status: 'error', error: 'Bad fingerprint number!'});
    console.log('Bad fingerprint number! ' + data.user.fingerprint1);
  }
}
