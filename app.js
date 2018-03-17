var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var lfguild = require('./lfguild');

app.use(express.static('wwwroot'));

app.get('/api', function(req, res) {
  res.send("hallo");
});

app.get('/api/getlfg', function (req, res) {
  var options = req.query;
  lfguild.scan(options.raidsPerWeek, options.nrSites, options.orderBy).then(function (result) {
    res.send(result);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
