(function () {
  'use strict';

  angular
    .module('gDates')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['Members'];

  function MainCtrl(Members) {
    var vm = this;
  }


})();
