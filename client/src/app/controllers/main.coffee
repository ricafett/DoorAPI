angular.module 'doorapi'
  .controller 'MainController', ($scope, $state, $log) ->
    $scope.error = $state.params.error[0]
