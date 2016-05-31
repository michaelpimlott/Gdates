angular.module('gDates')
 .factory('Members', function($http, $q, $window){
   return {
     getMembers: function() {
      return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members');
     }

   }
 });
