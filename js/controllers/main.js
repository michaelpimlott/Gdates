(function () {
  'use strict';

  angular
    .module('gDates')
    .controller('MainController', MainController);

  MainController.$inject = ['$rootScope', '$scope', '$location', 'memberService'];



  function MainController($rootScope, $scope, $location, memberService) {
    $scope.user = {};
    memberService.getMembers()
    .then(function(user) {
      $scope.members = user.data.data

    })
    .catch(function(err) {
      console.log(err);
    });

  };




})();
