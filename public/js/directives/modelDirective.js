/**
 * Created by johnwilson on 2/1/16.
 */
angular.module('app.directives.model', [])
    .directive('myModel', function() {
    return {
        scope: {
            item: '=resources'
        },
        restrict: 'E',
        templateUrl: '../partials/partial-list.html'
    };

});
