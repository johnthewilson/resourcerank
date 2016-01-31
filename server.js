// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// config files
var config = require('./config/db');
var db = mongoose.connection;

// set our port
var port = process.env.PORT || 3000;
//var Nerd = require('./app/models/nerd');
//var Javascript = require('./app/models/javascript');
// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(config.url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (c) {
    console.log('yay')
});

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev')); //log every request to the console
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
var router= require('./app/routes'); // configure our routes


app.use('/api', router)

app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
