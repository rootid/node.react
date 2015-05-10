var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, './src/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Add get service
app.get('/comments.json', function(req, res) {
  fs.readFile('./src/public/comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    console.log('sending data from server');
    res.send(data);
  });
});

//add post service
app.post('/comments.json', function(req, res) {
  fs.readFile('./src/public/comments.json', function(err, data) {
      console.log('data = ', data);
      var comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments));
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
