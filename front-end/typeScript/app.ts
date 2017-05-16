let app = angular.module('MyApp',[
    'controllers',
    'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'partials/index.html',
                controller: 'IndexController'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'partials/register.html',
                controller: 'RegisterController'
            });
        $urlRouterProvider.otherwise('/');
    }
]);