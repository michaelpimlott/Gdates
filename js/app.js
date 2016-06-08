(function() {
  'use strict';

  angular
    .module('gDates', [
      'ngRoute'
    ]);
    .config(config)

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
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
  };

  }());
