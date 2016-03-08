var LcdLib = require('lcd');
var Lcd = LcdLib.Lcd;

module.exports = function() {
  lcd = new Lcd({rs: 25, e: 24, data: [23, 17, 21, 22], cols: 16, rows: 2});

  lcd.put = function(text, time) {
    return new Promise(function (resolve, reject) {
      lcd.isHome = false;
      lines = text.split("\n");
      lcd.clear(function () {
        lcd.setCursor(0, 0);
        lcd.print(lines[0], function (err) {
          if (lines[1]) {
            lcd.setCursor(0, 1);
            lcd.print(lines[1], function (err) {
              if (!err) {
                resolve();
              } else {
                reject();
              }
            });
          } else if (!err) {
            resolve();
          } else {
            reject();
          }
        });
      });
      if (time) {
        setTimeout(function () {
          lcd.goHome();
        }, time * 1000);
      }
    });
  }
  lcd.clear1 = function() {
    return new Promise(function (resolve, reject) {
      lcd.setCursor(0, 0);
      lcd.print("                ", function (err) {
        if (!err) {
          lcd.setCursor(0, 0);
          resolve();
        } else {
          reject();
        }
      });
    });
  }
  lcd.clear2 = function() {
    return new Promise(function (resolve, reject) {
      lcd.setCursor(0, 1);
      lcd.print("                ", function (err) {
        if (!err) {
          lcd.setCursor(0, 1);
          resolve();
        } else {
          reject();
        }
      });
    });
  }
  lcd.put1 = function(text, time) {
    return new Promise(function (resolve, reject) {
      lcd.isHome = false;
      lcd.clear1().then(function () {
        lcd.print(text, function (err) {
          if (!err) {
            resolve();
          } else {
            reject();
          }
        });
      });
      if (time) {
        setTimeout(function () {
          lcd.goHome();
        }, time * 1000);
      }
    });
  }
  lcd.put2 = function(text, time) {
    return new Promise(function (resolve, reject) {
      lcd.isHome = false;
      lcd.clear2().then(function () {
        lcd.print(text, function (err) {
          if (!err) {
            resolve();
          } else {
            reject();
          }
        });
      });
      if (time) {
        setTimeout(function () {
          lcd.goHome();
        }, time * 1000);
      }
    });
  }

  lcd.isHome = false;
  lcd.showClock = true;
  lcd.message = "   CODEPLACE"
  lcd.goHome = function(time) {
    return lcd.put(lcd.message).then(function () {
      lcd.isHome = true;
    });
  }

  lcd.goHomeAfter = function(seconds) {
    setTimeout(lcd.goHome, seconds * 1000);
  }

  lcd.clockCicle = "date";
  lcd.startClock = function () {
    setInterval(function() {
      if (lcd.clockCicle === "date") {
        lcd.clockCicle = "time";
      } else if (lcd.clockCicle === "time") {
        lcd.clockCicle = "date";
      }
    }, 5000);
    setInterval(function() {
      if (lcd.isHome && lcd.showClock) {
        if (lcd.clockCicle === "time") {
          lcd.put2('    ' + new Date().toString().substring(16, 24)).then(function () {
            lcd.isHome = true;
          });
        } else if (lcd.clockCicle === "date") {
          lcd.put2(new Date().toString().substring(0, 15)).then(function () {
            lcd.isHome = true;
          });
        }
      }
    }, 1000);
  }

  console.log('LCD: Starting...')
  lcd.busy = true;

  lcd.on('ready', function () {
    lcd.goHome().then(function (err, data) {
      if (err) {
        console.log('LCD: init error: ' + err);
      } else {
        console.log('LCD: init: OK!');
        lcd.busy = false
        lcd.startClock();
      }
    });
  });

  return {lcd: lcd, gpio: LcdLib.gpio}

}
