angular.module 'doorapi'
  .run ($log) ->
    'ngInject'
    $log.debug 'runBlock end'

  .run ($rootScope, $state, $log) ->
    # Store currentUser from devise events
    $rootScope.$on('devise:logout', (event, oldCurrentUser) ->
      $rootScope.currentUser = null
    )
    $rootScope.$on('devise:login', (event, currentUser) ->
      $rootScope.currentUser = currentUser
    )

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) ->
      event.preventDefault()

      # Log all stateChangeErrors
      $log.log(error)

      # Redirect to sign in on 401
      if error.statusText == "Unauthorized"
        $state.go('sign_in', {error: error.data.error});
    )
    $rootScope.$on('devise:unauthorized', (event, deferred) ->
      # don't capture 401 here, using state resolve instead
      deferred.resolve()
    )

  .run (Auth, $log) ->
    # Check for previous session
    Auth.currentUser()
