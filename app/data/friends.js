// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friendsArray = [{
    "name": "Dog",
    "photo": "https://cdn.pixabay.com/photo/2013/11/23/02/17/dog-216282_1280.jpg",
    "scores": [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ]
}, {
    "name": "Kitty Cat",
    "photo": "https://cdn.pixabay.com/photo/2013/11/08/21/12/cat-207583_1280.jpg",
    "scores": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
