const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var morgan = require('morgan')
var logger = morgan('combined')
// API file for interacting with MongoDB
const api = require('./server/routes/api');

// required for heroku
// const forceNonSSL = function() {
//      return function (req, res, next) {
//        if (req.headers['x-forwarded-proto'] !== 'https') {
//          return res.redirect(
//           ['https://', req.get('Host'), req.url].join('')
//          );
//        }
//        next();
//      }
// }
// app.use(forceNonSSL());


console.log('if i am working on the api only i need to disable the line above this log! ')

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// express Paths
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/projects/jscalc', express.static(path.join(__dirname,'./server/views/htmlcalc'))); // works
app.use('/projects/jqcalc', express.static(path.join(__dirname,'./server/views/jquerycalc'))); // works
app.use('/projects/angularcalc', express.static(path.join(__dirname,'./server/views/angularjscalc'))); // works
app.use('/projects/bomberman', express.static(path.join(__dirname,'./server/views/bomberman'))); // works only locally
app.use('/projects/hangman', express.static(path.join(__dirname,'./server/views/hangman'))); // works only locally
// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
