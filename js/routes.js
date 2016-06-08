(function () {
  'use strict';

  angular.module('gDates')
    .config(config)
    // .run(routeChange);

    config.$inject = ['$routeProvider', '$httpProvider'];
    // routeChange.$inject = ['$rootScope', '$location', '$window'];

function config($routeProvider, $httpProvider) {
$routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'
  })
  .when('/members', {
    templateUrl: 'partials/members.html',
    controller: 'MembersController'
  })
  .when('/profile', {
    templateUrl: 'partials/profile.html',
    controller: 'ProfileController'
  })
  .when('/search', {
    templateUrl: 'partials/search.html',
    controller: 'SearchController'
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
