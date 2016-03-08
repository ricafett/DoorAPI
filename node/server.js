var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var jwt = require('jsonwebtoken');

var SECRET = require('./secret')();


module.exports = function () {
    //// Server Setup

  server.listen(8080, function () {
    console.log('App listening on port 8080!');
  });

  app.get('/', function (req, res) {
    res.send('YOU SHALL NOT PASS');
  });

    //// Socket io token authentication

  require('socketio-auth')(io, {
    authenticate: function (socket, data, callback) {
      jwt.verify(data.token, SECRET, function (err, decoded) {
        if (!decoded) {
          return callback(new Error("Auth Fail: " + err.name));
        } else {
          socket.id = decoded.id;
          socket.name = decoded.name;
          socket.role = decoded.role;
          return callback(null, true);
        }
      })
    }
  });

  return io

}
