const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const morgan = require('morgan')
const logger = morgan('combined')
// API file for interacting with MongoDB
const api = require('./server/routes/api');



// required for heroku
const forceSSL = function() {
     return function (req, res, next) {
       if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === "production") {
         return res.redirect(
          ['https://', req.get('Host'), req.url].join('')
         );
       }
       next();
     }
}
app.use(forceSSL());

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

var http = require("http");
setInterval(function() {
    http.get("https://lloyd-portfolio..herokuapp.com");
}, 300000); // every 5 minutes (300000)
server.listen(port, () => console.log(`Running on localhost:${port}`));

