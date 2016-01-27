angular.module 'doorapi'
  .controller "GroupsCtrl", ($scope, Group, $log) ->
    $scope.groups = Group.query()
