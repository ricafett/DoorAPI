angular.module 'doorapi'
  .controller 'UserSessionsCtrl', ($scope, $state, $location, Auth, $log) ->
    if !angular.equals({}, $state.params.error)
      $scope.error = $state.params.error

    $scope.submitForm = (credentials) ->
      Auth.login(credentials).then(
        ((user) ->
          $location.path("/")
        ),
        ((error) ->
          $scope.error = error.data.error
        )
      )



  .controller 'SignOutCtrl', ($location, Auth, $log) ->
    Auth.logout().then((oldUser) ->
      $location.path("/")
    , (error) ->
      $log.log(error)
    )
