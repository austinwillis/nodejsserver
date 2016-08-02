var express = require('express');
var multer = require('multer');
var upload = multer();
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

app.post('/api/buttonPress', upload.array(), function(req, res, next) {
  var date = new Date();
  var button = req.body.name;
  console.log(button);
  if (button === 'undefined') {
    res.send("Missing button name");
  } else {
    var buttons = db.getData("/buttons");
    buttons.push({'name' : button, 'time' : getDateTime() });
    db.push("/buttons", buttons);
    res.send({'name' : button, 'time' : getDateTime()});
  }
});
