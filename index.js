var express = require('express');
var app = express();

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Listening on port ' + port);
})
