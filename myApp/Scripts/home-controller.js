myApp.controller('homeController', function($scope, $timeout){
    $scope.message = "Hello World";

    $timeout(function(){
        $scope.message = "Welcome to Hello World!!!";
    }, 2000)
})