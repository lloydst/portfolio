const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');
// required for heroku
const forceSSL = function() {
     return function (req, res, next) {
       if (req.headers['x-forwarded-proto'] !== 'https') {
         return res.redirect(
          ['https://', req.get('Host'), req.url].join('')
         );
       }
       next();
     }
}

//app.use(forceSSL());
console.log('if i am working on the api only i need to disable the line above this log! ')

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/jscalc', express.static(path.join(__dirname,'./server/views/htmlcalc'))); // works
app.use('/jqcalc', express.static(path.join(__dirname,'./server/views/jquerycalc'))); // works
app.use('/angularcalc', express.static(path.join(__dirname,'./server/views/angularjscalc'))); // works
app.use('/bomberman', express.static(path.join(__dirname,'./server/views/bomberman')));
app.use('/hangman', express.static(path.join(__dirname,'./server/views/hangman')));
// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);
app.use(forceSSL());
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
