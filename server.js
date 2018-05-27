//bring in npms and call express
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//make the public folder a static folder
app.use("/public",express.static("./public"));
//first public here is virtual path, second "" is that actual path to the folder you want to create the virtual path
app.use(express.static("public"));

//from previous exercise 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
require("./routing/apiRoutes")(app);

require("./routing/htmlRoutes.js")(app);


var PORT = 5000;





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });