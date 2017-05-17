let controllers = angular.module('controllers',[]);
controllers
    .controller('IndexController',[IndexController])
    .controller('RegisterController',['$scope','Users','$state','$window',RegisterController])
    .controller('GalleryController',['$scope','Dishes','$window',GalleryController]);


function IndexController(){

}
function RegisterController($scope,Users,$state,$window){
    $scope.register = function(user){
        Users.createAction(user).then(function(response){
            $window.localStorage.user = JSON.stringify(response.data);
            $state.go("gallery");
        },function(error){
            //TODO:: handle request error
            console.log(error);
        });
    }
}

function GalleryController($scope,Dishes,$window){
    $scope.userDish = '';
    $scope.images = [];
    $scope.addDish = function(userDish){
        console.log(userDish);
        let user = $window.localStorage.user;
        if(user){
            user = JSON.parse(user);
        }
        console.log({file:userDish,user:user.id});
        Dishes.createAction({file:userDish,user:user.id}).then(function(response){
            console.log(response);
            console.log($scope.images);
            $scope.images.push(response.data);
            $scope.submit_dish = false;
        },function(err){
            //TODO::handle error
            console.log(err);
        })
    };
    Dishes.indexAction().then(function(response){
        console.log(response);
        $scope.images = response || [];
        console.log($scope.images);
    },function(err){
        //TODO::handle error
        console.log(err);
    });
    // $scope.images = [
    //     {
    //         src:"/images/index-bg.jpg"
    //     },{
    //         src:"/images/registration-bg.jpg"
    //     },{
    //         src:"/images/spon.png"
    //     },{
    //         src:"/images/spon.jpg"
    //     },{
    //         src:"/images/index-bg.jpg"
    //     },{
    //         src:"/images/registration-bg.jpg"
    //     },{
    //         src:"/images/spon.png"
    //     },{
    //         src:"/images/spon.jpg"
    //     },{
    //         src:"/images/index-bg.jpg"
    //     },{
    //         src:"/images/registration-bg.jpg"
    //     },{
    //         src:"/images/spon.png"
    //     },{
    //         src:"/images/spon.jpg"
    //     },
    // ]
}