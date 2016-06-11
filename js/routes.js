(function () {
  'use strict';

  angular.module('gDates')
    .config(config)


    config.$inject = ['$routeProvider', '$httpProvider'];


function config($routeProvider, $httpProvider) {
$routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'
  })
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  })
  .when('/register',{
    templateUrl: 'partials/register.html',
    controller: 'RegisterController'
  })
};
})();
