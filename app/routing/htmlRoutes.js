// DEPENDENCIES
// to define the correct file path easily, we use path npm package
var path = require('path');

// ROUTING
module.exports = function(app) {
    // HTML GET Requests to display the correct HTML page when the user visits
    // that route page

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};
