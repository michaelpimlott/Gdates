(function(){
  'use strict'

  angular
    .module('gDates')
    .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$rootScope', '$scope', '$location'];


    function RegisterController($rootScope, $scope, $location) {
      $scope.user = {};
      console.log('test');
    }


})();
