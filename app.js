var express = require('express');
var app = express();

app.use(express.static('wwwroot'));

app.get('/getWowProgress', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
