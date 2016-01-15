angular.module 'doorapi'
  .controller 'UserSessionsCtrl', ($scope, $location, $log) ->
    if $location.search().err == "unauthorized"
      $scope.error = "You don't have permission to access this area! Please login first."
      $location.search("err", null)
    $scope.$on('auth:login-error', (ev, reason) ->
      $scope.error = reason.errors[0]
    )
