(function() {
  'use strict';

  angular
    .module('gDates')
    .controller('LoginCtrl', LoginCtrl)

  LoginCtrl.$inject = ['User', '$state'];

  function LoginCtrl(User, $state) {
    var vm = this;
  }
})();
