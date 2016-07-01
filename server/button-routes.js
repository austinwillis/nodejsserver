var express = require('express');
var JsonDB = require('node-json-db');
var db = new JsonDB("myDataBase", true, true);

var app = module.exports = express.Router();

var getDateTime = function() {
  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
};

app.get('/api/buttons', function(req, res) {
  res.status(201).send({
    data: db.getData("/buttons")
  });
});

app.post('/api/buttonPress', function(req, res) {
  var date = new Date();
  var button = req.query.button;
  if (button === 'undefined') {
    res.send("Missing button name");
  } else {
    var numButtons = db.getData("/numButtons");
    db.push("/numButtons", numButtons + 1);
    db.push("/buttons/button" + numButtons + 1, {'name' : button, 'time' : getDateTime() });
    res.send(db.getData("/buttons/button" + numButtons + 1));
  }
});
