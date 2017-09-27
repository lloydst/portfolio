const express = require('express');
const router = express.Router();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect db
const connection = (closure) => {
     if (process.env.NODE_ENV === "production") {
          return MongoClient.connect('mongodb://admin:admin@ds153853.mlab.com:53853/portfolio', (err, db) => {
               if (err) return console.log(err);

          closure(db);
          });
     } else {
          return MongoClient.connect('mongodb://localhost:27017/portfolio',(err, db) => {
               if(err) return console.log(err);

          closure(db);
          });
     }
};

// Error handling
const sendError = (err, res) => {
     response.status = 501;
     response.message = typeof err == 'object' ? err.message : err;
     res.status(501).json(response);
 };

 // Response handling
 let response = {
     status: 200,
     data: [],
     message: null
 };

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // need to use moment.js to make this pretty
  console.log('Time: ', Date.now())
  next()
})

router.get('/contact',(req, res) => {
     connection((db) => {
         db.collection('contacts')
             .find()
             .toArray()
             .then((contacts) => {
                 response.data = contacts;
                 res.json(response);
             })
             .catch((err) => {
                 sendError(err, res);
             });
     });
 });

 router.get('/blog',(req, res) => {               // get all
     connection((db) => {
         db.collection('blogs')
             .find()
             .toArray()
             .then((blogs) => {
                 response.data = blogs;
                 res.json(response);
             })
             .catch((err) => {
                 sendError(err, res);
             });
     });
});

 module.exports = router;
