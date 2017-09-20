var express = require('express')
var router = express.Router()
var cors = require('cors')
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // need to use moment.js to make this pretty
  console.log('Time: ', Date.now())
  next()
})
//// define the home page route
//router.get('/', function (req, res) {
//  res.send('Birds home page')
//})
//// define the about route
//router.get('/about', function (req, res) {
//  res.send('About birds')
//})
router.get('/contact',cors(),function(req, res){
var contacts = {
  phone: '+31620917451',
  email: 'lloyd.stumpel@gmail.com'
}
  res.send({contacts})
})
module.exports = router;
