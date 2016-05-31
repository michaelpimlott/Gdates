(function () {
  'use strict';

  angular
    .module('gDates')
    .controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = ['$rootScope', '$scope', '$location', 'memberService'];

  function mainCtrl($rootScope, $scope, $location, memberService) {
    $scope.user = {};
    memberService.getMembers().then(function(user){
      $scope.members = user.data.data
    })
    .catch(function(err) {
      console.log(err);
    });
  };
})();
