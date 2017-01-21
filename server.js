// DEPENDENCIES
// npm packages for functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
// properties for Express server
var app = express();

// Initial port
var PORT = process.env.PORT || 8080;

// body parser for data interpretation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTES
// Points server to CSS and JS static route files
app.use(express.static(path.join(__dirname + '/app/public')));

//Points server to dynamic HTML files
require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);

// SERVER LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
