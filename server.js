var express = require('express');

var app = express();
var dist = '/' + (process.env.STATIC_DIR || 'dist');

// Serve static files (css, js, index.html, so on)
app.use(express.static(__dirname + dist));

// For everything else, serve the main vue index.html
var index = dist + '/index.html';
app.use('*', function (req, res) {
  res.sendFile(__dirname + index);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on', port);
});
