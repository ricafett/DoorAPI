angular.module 'doorapi'
  .controller "GroupsCtrl", ($scope, Group) ->
    $scope.groups = Group.query()
