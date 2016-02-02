// public/js/services/NerdService.js
resourceRank.factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function(api) {
            //return "Hello, World!";
            url="/api/";
            return $http.get(url+api);
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/javascript', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/javascript/' + id);
        }
    }

}]);
