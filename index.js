var express = require('express');
var app = express();

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
})
