(function() {
  'use strict';

  angular
    .module('gDates')
    .controller('LoginController', LoginController)

  LoginController.$inject = ['$rootScope', '$scope', '$location'];

  function LoginController($rootScope, $scope, $location) {
    $scope.user = {};
    

  }
})();
