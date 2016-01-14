angular.module 'doorapi'
  .run ($log) ->
    'ngInject'
    $log.debug 'runBlock end'

`angular.module('doorapi').run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/');
  });
}]);`
