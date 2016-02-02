/**
 * Created by johnwilson on 2/1/16.
 */
resourceRank.controller('VectorsController', function($scope, Nerd) {

    $scope.tagline = 'To the sun of Javscript and back!';
    $scope.test= "I am a stestVectors";
    //$scope.data= Nerd.get();
    // console.log(data.results);
    Nerd.get("vectors").success(function(data){
        $scope.todos = data;
        console.log(data, status);
    }).error(function(data, status){
        console.log(data, status);
        $scope.todos = [];
    });

});