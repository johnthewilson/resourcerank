'use strict';

var resourceRank = angular.module('resourceRank', ['ui.router'])

   .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  console.log("skvbsdjhgbs");
    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../partials/partial-home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('javascript', {
            // we'll get to this in a bit
            url: '/javascript',
            templateUrl: '../partials/partials-all.html',
            controller:"MainController"
        });

});