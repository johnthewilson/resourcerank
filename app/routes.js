// grab the nerd model we just created

var Nerd = require('./models/nerd');
var Javascript = require('./models/javascript');
var code
var express= require('express');
var router= express.Router();


        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        router.use( function(req, res, next) {
            console.log("Server routing now ....");
            next();
        });
        // Test API routing (Nerd Collection)
//====================================================================================================
        router.route('/resources').get(function(req, res) {
            //console.log("osdnvosndvos Hoo ");
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, data) {
                //console.log(data);
                // if there is an error retrieving, send the error.
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(data); // return all nerds in JSON format
            });

        });

        router.route('/resources').post(function(req,res){
            var nerd =new Nerd();
            nerd.title=req.body.title;
            nerd.link=req.body.link;
            nerd.save(function(err){
                if(err) {
                    console.log("Erroe");
                }
                res.json({message :"Created "});

            });

        });
//+++++++++++++++++++================================================================================
        //API Route  Javascript collection

        router.route('/javascript').get(function(req, res) {
            console.log("osdnvosndvos Hoo ");
            // use mongoose to get all nerds in the database
            Javascript.find(function(err, nerds) {
                //console.log(nerds);
                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });

        });

        //router.route('/javascript').post(function(req,res){
        //    var nerd =new Nerd();
        //    nerd.title=req.body.title;
        //    nerd.link=req.body.link;
        //    nerd.save(function(err){
        //        if(err) {
        //            console.log("Erroe");
        //        }
        //        res.json({message :"Created "});
        //
        //    });
        //
        //});

        // frontend routes =========================================================
        // route to handle all angular requests
        router.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

module.exports= router;