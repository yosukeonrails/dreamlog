const express = require("express");
const app = express();
const config = require("./config");
var mongoose = require("mongoose");
require("dotenv").config();
var cors = require("cors");

const routes = require("./routes");

//  Connect all our routes to our application
app.use("/", routes);

var engineServer = require("engine.io");

var engineRunningServer = engineServer.listen(5000, {
  pingTimeout: 2000,
  pingInterval: 10000
});

engineRunningServer.on("connection", socket => {
  console.log("Connected");
});

// use it before all route definitions
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// test a post request from  postman and then client
var runServer = callback => {
  mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true }, function(
    err
  ) {
    console.log("running at" + config.DATABASE_URL);
    if (err && callback) {
      return callback(err);
    }
    app.listen(3001, function() {
      console.log("Listening on localhost:" + 3001);
      if (callback) {
        callback();
      }
    });
  });
};

if (require.main === module) {
  runServer(function(err) {
    if (err) {
      console.error(err);
    }
  });
}
