var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(1234, function () {
  console.log('API Docs app listening on port 1234!');
  require("openurl").open("http://localhost:1234/install")
});