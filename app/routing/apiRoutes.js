// LOAD DATA
// We are linking our routes to the data source
// The data source holds arrays of friends info

var friendsData = require("../data/friends.js");

// ROUTING

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users visit localhost:PORT/api/friends they are shown a JSON of the data in the friendsArray
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form to submit data to the server
    // When a user submits form data, the JSON representing the form data is pushed to the friendsArray
    // The server responds with the best matched friend
    var bestFriend = function(user) {
        var friend = {};
        var userScores = user.scores;
        //userScores.length * 4 is the max possible difference
        var maxDifference = userScores.length * 4;
        friendsData.forEach(function(element) {
            var tempDifference = 0;
            for (var i = 0; i < userScores.length; i++) {
                tempDifference += Math.abs(userScores[i] - element.scores[i]);
            }
            if (tempDifference < maxDifference) {
                friend = element;
            }
        });
        return friend;
    };

    app.post("/api/friends", function(req, res) {
        res.json(bestFriend(req.body));
        friendsData.push(req.body);
    });

    //This allows the array to be cleared from the API
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = [];
        console.log(friendsData);
    });
};
