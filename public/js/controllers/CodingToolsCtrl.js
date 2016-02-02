/**
 * Created by johnwilson on 2/1/16.
 */
resourceRank.controller('CodingToolsController', function($scope, Nerd) {

    $scope.tagline = 'Coding Tools !';
    $scope.test= "I am a stest";
    //$scope.data= Nerd.get();
    // console.log(data.results);
    Nerd.get("codingtools").success(function(data){
        $scope.todos = data;
        console.log(data, status);
    }).error(function(data, status){
        console.log(data, status);
        $scope.todos = [];
    });

});
