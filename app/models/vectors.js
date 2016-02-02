/**
 * Created by johnwilson on 1/30/16.
 */
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var vectors = new mongoose.Schema({
    name : {type : String, default: ''},
    about : {type : String, default: ''},
    type : {type : String, default: ''},
    link : {type : String, default: ''},
    url : {type : String, default: ''},
    api : {type : String, default: ''}
}, { collection: 'Vectors'});

module.exports = mongoose.model('Vectors', vectors);
