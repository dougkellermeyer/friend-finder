var friends = require("../data/friends.js");

module.exports = function (app) {

  //  * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  //* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  app.post('/api/friends', function (req, res) {
    //put in the compatiblity logic
    //6. Determine the user's most compatible friend using the following as a guide:

    //* Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    //take JSON data and put into a variable
    // console.log(req);
    var difference = 40;
    var matchName = '';
    var matchPhoto = '';

    friends.forEach(function (friend) {
      var matchedScoresArray = [];
      var totalDifference = 40;
      console.log(friend);

      function add(total, num) {
        return total + num;
      }

      for (var i = 0; i < friend.scores.length; i++) {
        matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

      }

      totalDifference = matchedScoresArray.reduce(add, 0);

      if (totalDifference < difference) {
        difference = totalDifference;
        matchName = friend.name;
        matchPhoto = friend.photo;
      }
    });
    res.json({
      name: matchName,
      photo: matchPhoto
    });

    friends.push(req.body);
    //worked with Mac Hartman - aka bossman
  });

};