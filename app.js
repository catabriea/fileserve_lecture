var express = require('express');
var app = express();
var path = require('path');

app.set('port',(process.env.PORT || 5000));

app.get('/*', function(req, res){
    //dropped in * wildcard

    var file = req.params[0] || "./public/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
    // $$$ big money code
    // what that does is it sets a default file
});

app.listen(app.get('port'), function(){
    console.log("Hey! Listening on Port: " + app.get('port'));
});

//install grunt and grunt-contrib-uglify