// grab the nerd model we just created

var Nerd = require('./models/nerd');
var Javascript = require('./models/javascript');
var Codingtools=require('./models/codingtools');
var Colors=require('./models/colors');
var Css=require('./models/css');
var Frameworks=require('./models/frameworks');
var Grids=require('./models/grids');
var Images=require('./models/images');
var Interfacedesign= require('./models/interfacedesign');
var Texteditors=require('./models/texteditors');
var Textures=require('./models/textures');
var Vectors=require('./models/vectors');
var Wireframing =require('./models/wireframing');
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
        // get request
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
        // post
        router.route('/javascript').post(function(req,res){
            var javascript =new Javascript();
            javascript.name=req.body.name;
            javascript.about=req.body.about;
            javascript.link=req.body.link;
            javascript.type=req.body.type;
            javascript.api="javascript";
            javascript.save(function(err){
                if(err) {
                    console.log("Error");
                }
                res.json({message :"Created "});

            });

        });
//==========================================================================================
        //APi Routing for css
      //=====================================================================================

        router.route('/css').get(function(req, res) {
            console.log("osdnvosndvos Hoo ");
            // use mongoose to get all nerds in the database
            Css.find(function(err, nerds) {
                //console.log(nerds);
                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });

        });

            // post
            router.route('/css').post(function(req,res){
                var css =new Css();
                css.name=req.body.name;
                css.about=req.body.about;
                css.link=req.body.link;
                css.type=req.body.type;
                css.api="css";
                css.save(function(err){
                    if(err) {
                        console.log("Error");
                    }
                    res.json({message :"Created "});

                });

            });
//================================================================================================
// Routes for css end here

//==========================================================================================
//APi Routing for codingtools
//=====================================================================================

router.route('/codingtools').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Codingtools.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/codingtools').post(function(req,res){
    var codingtools =new Codingtools();
    codingtools.name=req.body.name;
    codingtools.about=req.body.about;
    codingtools.link=req.body.link;
    codingtools.type=req.body.type;
    codingtools.api="codingtools";
    codingtools.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for codingtools end here

//==========================================================================================
//APi Routing for colors
//=====================================================================================

router.route('/colors').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Colors.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/colors').post(function(req,res){
    var colors =new Colors();
    colors.name=req.body.name;
    colors.about=req.body.about;
    colors.link=req.body.link;
    colors.type=req.body.type;
    colors.api="colors";
    colors.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for colors end here

//==========================================================================================
//APi Routing for frameworks
//=====================================================================================

router.route('/frameworks').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Frameworks.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/frameworks').post(function(req,res){
    var frameworks =new Frameworks();
    frameworks.name=req.body.name;
    frameworks.about=req.body.about;
    frameworks.link=req.body.link;
    frameworks.type=req.body.type;
    frameworks.api="frameworks";
    frameworks.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for frameworks end here

//==========================================================================================
//APi Routing for grids
//=====================================================================================

router.route('/grids').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Grids.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/grids').post(function(req,res){
    var grids =new Grids();
    grids.name=req.body.name;
    grids.about=req.body.about;
    grids.link=req.body.link;
    grids.type=req.body.type;
    grids.api="grids";
    grids.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for css end here

//==========================================================================================
//APi Routing for images
//=====================================================================================

router.route('/images').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Images.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/images').post(function(req,res){
    var images =new Images();
    images.name=req.body.name;
    images.about=req.body.about;
    images.link=req.body.link;
    images.type=req.body.type;
    images.api="images";
    images.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for images end here
//==========================================================================================
//APi Routing for interfacedesign
//=====================================================================================

router.route('/interfacedesign').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Interfacedesign.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/interfacedesign').post(function(req,res){
    var interfacedesign =new Interfacedesign();
    interfacedesign.name=req.body.name;
    interfacedesign.about=req.body.about;
    interfacedesign.link=req.body.link;
    interfacedesign.type=req.body.type;
    interfacedesign.api="interfacedesign";
    interfacedesign.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for interfacedesign end here
//==========================================================================================
//APi Routing for texteditors
//=====================================================================================

router.route('/texteditors').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Texteditors.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/texteditors').post(function(req,res){
    var texteditors =new Texteditors();
    texteditors.name=req.body.name;
    texteditors.about=req.body.about;
    texteditors.link=req.body.link;
    texteditors.type=req.body.type;
    texteditors.api="texteditors";
    texteditors.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for texteditors end here
//==========================================================================================
//APi Routing for textures
//=====================================================================================

router.route('/textures').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Textures.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/textures').post(function(req,res){
    var textures =new Textures();
    textures.name=req.body.name;
    textures.about=req.body.about;
    textures.link=req.body.link;
    textures.type=req.body.type;
    textures.api="textures";
    textures.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for textures end here

//==========================================================================================
//APi Routing for vectors
//=====================================================================================

router.route('/vectors').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Vectors.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/vectors').post(function(req,res){
    var vectors =new Vectors();
    vectors.name=req.body.name;
    vectors.about=req.body.about;
    vectors.link=req.body.link;
    vectors.type=req.body.type;
    vectors.api="vectors";
    vectors.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for vectors end here
//==========================================================================================
//APi Routing for wireframing
//=====================================================================================

router.route('/wireframing').get(function(req, res) {
    console.log("osdnvosndvos Hoo ");
    // use mongoose to get all nerds in the database
    Wireframing.find(function(err, nerds) {
        //console.log(nerds);
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });

});

// post
router.route('/wireframing').post(function(req,res){
    var wireframing =new Wireframing();
    wireframing.name=req.body.name;
    wireframing.about=req.body.about;
    wireframing.link=req.body.link;
    wireframing.type=req.body.type;
    wireframing.api="wireframing";
    wireframing.save(function(err){
        if(err) {
            console.log("Error");
        }
        res.json({message :"Created "});

    });

});
//================================================================================================
// Routes for wireframing end here

// frontend routes =========================================================
        // route to handle all angular requests
        router.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

module.exports= router;