$('#submit-btn').on('click', function(event) {
    event.preventDefault();
    //Makes an array of the values of the selected options
    var scoreValues = [];
    $('.selected-option option:selected').each(function() {
        //+ converts the string to number
        scoreValues.push(+$(this).val());
    });
    var friendData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: scoreValues
    };
    // AJAX post the data to the api/friends
    $.post("/api/friends", friendData).done(function(data) {
        //Show the modal with the selected friend
        $("#friend-name").text(data.name);
        $('#friend-photo').attr("src", data.photo);
        $("#friend-modal").modal('toggle');
    });
});
