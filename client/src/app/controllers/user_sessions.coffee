angular.module 'doorapi'
  .controller 'UserSessionsCtrl', ($scope, $location, Auth, $log) ->
    if $location.search().err == "unauthorized"
      $scope.error = "You don't have permission to access this area! Please login first."
      $location.search("err", null)


    $scope.submitForm = (credentials) ->
      $log.log("yolo")
      Auth.login(credentials).then(
        ((user) ->
          $log.log(Auth._currentUser)
          $location.path("/")
        ),
        ((error) ->
          $scope.error = error[0]
        ))

    $scope.$on('devise:login', (event, currentUser) ->
      $log.log("logged in")
    )


    $scope.$on('devise:new-session', (event, currentUser) ->
      $log.log("new session")
    )


  .controller 'SignOutCtrl', ($location, Auth, $log) ->
    Auth.logout().then((oldUser) ->
      $location.path("/")
    , (error) ->
      $log.log(error)
    )
