
/**
 * Created by johnwilson on 2/1/16.
 */
resourceRank.controller('FrameworksController', function($scope, Nerd) {

    $scope.tagline = 'Frameworks!';
    $scope.test= "I am a stest";
    //$scope.data= Nerd.get();
    // console.log(data.results);
    Nerd.get("frameworks").success(function(data){
        $scope.todos = data;
        console.log(data, status);
    }).error(function(data, status){
        console.log(data, status);
        $scope.todos = [];
    });

});