module.exports = function (app) {

    var path = require("path");

    // GET method with url /survey
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

        //a default, catch-all route that leads to home.html
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname + '/../public/home.html'));
        });

    };