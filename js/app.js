(function() {
  'use strict';

  angular
    .module('Gdates', [
      'ngRoute'
    ]);
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/members', {
        templateUrl: 'partials/members.html',
        controller: 'membersController'
      })
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileController'
      })
      .when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchController'
      })
  };

  }());
