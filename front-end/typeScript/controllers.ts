let controllers = angular.module('controllers',[]);
controllers
    .controller('IndexController',[IndexController])
    .controller('RegisterController',['$scope',RegisterController]);


function IndexController(){

}
function RegisterController($scope){
    $scope.register = function(user){
    }
}