angular.module 'doorapi'
  .run ($log) ->
    'ngInject'
    $log.debug 'runBlock end'

  .run ($rootScope, $location, $log) ->
    $rootScope.$on('auth:login-success', ->
      $location.path('/')
    )

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) ->
      event.preventDefault()
      $log.log(error)

      if error.reason == "unauthorized"
        $location.path('/sign_in').search({err: "unauthorized"})
    )
