//bring in npms and call express
var express = require("express");
var app = express();

//make the public folder a static folder
app.use("/public",express.static("./app/public"));
//first public here is virtual path, second "" is that actual path to the folder you want to create the virtual path
app.use(express.static("public"));
//
require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes.js")(app);
var bodyParser = require("body-parser");

var PORT = 5000;

//from previous exercise 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });