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
        //iterate through friend data to find the friend with the least differences
        friendsData.forEach(function(element) {
            var elementDifference = 0;
            //calculate the difference between the user's score and the current element's scores
            for (var i = 0; i < userScores.length; i++) {
                elementDifference += Math.abs(userScores[i] - element.scores[i]);
            }
            if (elementDifference < maxDifference) {
                //reset max diff to the difference of the current element
                maxDifference = elementDifference;
                //set friend equal to the proper element in the array
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
