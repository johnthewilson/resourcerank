/**
 * Created by johnwilson on 2/1/16.
 */
resourceRank.controller('TexturesController', function($scope, Nerd) {

    $scope.tagline = 'Textures!';
    $scope.test= "I am a stest";
    //$scope.data= Nerd.get();
    // console.log(data.results);
    Nerd.get("textures").success(function(data){
        $scope.todos = data;
        console.log(data, status);
    }).error(function(data, status){
        console.log(data, status);
        $scope.todos = [];
    });

});