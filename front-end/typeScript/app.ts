let app = angular.module('MyApp',[
    'services',
    'controllers',
    'ui.router',
    'directives'
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
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: 'partials/gallery.html',
                controller: 'GalleryController'
            });
        $urlRouterProvider.otherwise('/');
    }
]);