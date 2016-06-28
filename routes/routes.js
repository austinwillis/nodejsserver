var JsonDB = require('node-json-db');
var db = new JsonDB("myDataBase", true, true);

var appRouter = function(app) {
  app.get("/", function(req, res) {
    var resstring = "<p><a href='http://localhost:3000/buttons'>Buttons</a></p>";
    res.send("<p>Simple Button Server</p>" + resstring);
  });

  app.get("/api/buttons", function(req, res) {
    //res.send(db.getData("/buttons"));
    res.send(db.getData("/buttons"));
  });

  app.post("/api/buttonPress", function(req, res) {
    var date = new Date();
    var button = req.query.button;
    if (button === 'undefined') {
      res.send("Missing button name");
    } else {
      db.push("/buttons/" + button, getDateTime());
      res.send(db.getData("/buttons/" + button));
    }
  });
}


function getDateTime() {
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
}

module.exports = appRouter;
