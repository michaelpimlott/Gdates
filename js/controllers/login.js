(function () {
  'use strict';

  angular
    .module('gDates')
    .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

    function loginCtrl($rootScope, $scope, $location, authService) {
      $scope.user = {};
      $scope.login = function() {
        authService.login($scope.user);
        .then(function(user) {
          authService.setUserInfo(user);
          $location.path('/');
          $rootScope.currentUser = authService.getUserInfo();
        })
        .catch(function(err) {
          console.log('error');
        });
      };

    }

})();
