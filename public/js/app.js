'use strict';

var resourceRank = angular.module('resourceRank', ['ui.router','app.directives.model' ])

   .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
  //console.log("main app.js(angular state controller)");
    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../partials/partial-home.html',
            controller:"MainController"
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('javascript', {
            // we'll get to this in a bit
            url: '/javascript',
            templateUrl: '../partials/partials-all.html',
            controller:"JavascriptController"
        })
        .state('codingtools', {
            // we'll get to this in a bit
            url: '/codingtools',
            templateUrl: '../partials/partials-all.html',
            controller:"CodingToolsController"
        })
        .state('colors', {
            // we'll get to this in a bit
            url: '/colors',
            templateUrl: '../partials/partials-all.html',
            controller:"ColorsController"
        })
        .state('css', {
            // we'll get to this in a bit
            url: '/css',
            templateUrl: '../partials/partials-all.html',
            controller:"CssController"
        })
        .state('frameworks', {
            // we'll get to this in a bit
            url: '/frameworks',
            templateUrl: '../partials/partials-all.html',
            controller:"FrameworksController"
        })
        .state('grids', {
            // we'll get to this in a bit
            url: '/grids',
            templateUrl: '../partials/partials-all.html',
            controller:"GridsController"
        })
        .state('images', {
            // we'll get to this in a bit
            url: '/images',
            templateUrl: '../partials/partials-all.html',
            controller:"ImagesController"
        })
        .state('interfacedesign', {
            // we'll get to this in a bit
            url: '/interfacedesign',
            templateUrl: '../partials/partials-all.html',
            controller:"InteraceDesignController"
        })
        .state('texteditors', {
            // we'll get to this in a bit
            url: '/texteditors',
            templateUrl: '../partials/partials-all.html',
            controller:"TextEditorsController"
        })
        .state('textures', {
            // we'll get to this in a bit
            url: '/textures',
            templateUrl: '../partials/partials-all.html',
            controller:"TexturesController"
        })
        .state('vectors', {
            // we'll get to this in a bit
            url: '/vectors',
            templateUrl: '../partials/partials-all.html',
            controller:"VectorsController"
        })
        .state('wireframing', {
            // we'll get to this in a bit
            url: '/wireframing',
            templateUrl: '../partials/partials-all.html',
            controller:"WireframingController"
        })

});