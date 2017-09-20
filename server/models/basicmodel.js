
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BasicSchema   = new Schema({
    id: String,
    link: String
});

module.exports = mongoose.model('Basic', BasicSchema);
