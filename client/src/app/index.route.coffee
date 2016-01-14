angular.module 'doorapi'
  .config ($stateProvider, $urlRouterProvider, $locationProvider) ->
    'ngInject'
    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/main/main.html'
        controller: 'MainController'
        controllerAs: 'main'
      .state "groups",
        url: "/groups",
        templateUrl: "app/views/groups.html",
        controller: "GroupsCtrl"
        resolve:
          auth: ($auth) ->
            $auth.validateUser()
      .state "sign_in",
        url: "/sign_in",
        templateUrl: "app/views/user_sessions/new.html",
        controller: "UserSessionsCtrl"

    $urlRouterProvider.otherwise '/'

    $locationProvider.html5Mode(
      enabled: true
    )
