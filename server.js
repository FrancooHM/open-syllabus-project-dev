var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 80

app.use(express.static(path.join(__dirname + '/client/build/.')));

app.get('*', function (request, response){
    response.sendFile(__dirname + '/client/build/index.html')
});

app.listen(PORT, function(error) {

    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }

});
