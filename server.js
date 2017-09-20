
var express = require('express');
var path = require('path');
var app = express();
var api = express();
var cors = require('cors');
var router = require('./server/api.js');
var port = 3000;


app.use('/', router);


api.use('/', express.static('dist'));
api.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port+1)
api.listen(port);
console.log('server opened on: '+ (port/10)+1);
console.log('client open on: '+port);
