var express = require('express');

var app = express();
var directory = '/' + (process.env.STATIC_DIR || 'dist');

// Serve static files (css, js, so on)
var assets = directory + '/assets';
app.use(express.static(__dirname + assets));

// For everything else, serve the main vue index.html
var index = directory + '/index.html';
app.use('*', function (req, res) {
    res.sendFile(__dirname + index);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on', port);
});
