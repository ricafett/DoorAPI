angular.module 'doorapi'
  .run ($log) ->
    'ngInject'
    $log.debug 'runBlock end'

  .run ($rootScope, $location, $log) ->
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) ->
      event.preventDefault()
      $log.log(error)

      if error.statusText == "Unauthorized"
        $location.path("/")
        $location.path('/sign_in').search({err: "unauthorized"})
    )

    $rootScope.$on('devise:logout', (event, oldCurrentUser) ->
      $rootScope.currentUser = null
    )

    $rootScope.$on('devise:login', (event, currentUser) ->
      $rootScope.currentUser = currentUser
    )
