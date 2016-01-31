// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var nerd = new mongoose.Schema({
    title : {type : String, default: ''},
    link : {type : String, default: ''}
}, { collection: 'Nerd'});

module.exports = mongoose.model('Nerd', nerd);
