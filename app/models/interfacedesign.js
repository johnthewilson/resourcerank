/**
 * Created by johnwilson on 1/30/16.
 */
// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var interfacedesign = new mongoose.Schema({
    name : {type : String, default: ''},
    about : {type : String, default: ''},
    type : {type : String, default: ''},
    link : {type : String, default: ''},
    url : {type : String, default: ''},
    api : {type : String, default: ''}
}, { collection: 'Interfacedesign'});

module.exports = mongoose.model('Interfacedesign', interfacedesign);
