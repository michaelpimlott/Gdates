(function() {
  'use strict';

  angular
    .module('gDates')
    .controller('LoginController', LoginController)

  LoginController.$inject = ['User', '$state'];

  function LoginController(User, $state) {
    var vm = this;
    vm.name = 'michael';
    console.log("Michael");
  }
})();
