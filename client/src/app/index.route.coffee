angular.module 'doorapi'
  .config ($stateProvider, $urlRouterProvider) ->
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

    $urlRouterProvider.otherwise '/'
