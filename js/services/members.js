(function () {
  'use strict';



  angular.module('gDates')
  .service('memberService', memberService);

  memberService.$inject = ['$http', '$window'];

  function memberService($http, $window) {
    var user = {};
    return {
      getMembers: function() {
        return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members');
     }
   };
 }

})();
