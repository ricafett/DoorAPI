angular.module 'doorapi'
  .config ($stateProvider, $urlRouterProvider, $locationProvider) ->
    'ngInject'
    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/views/main.html'
        controller: 'MainController'
        controllerAs: 'main'

      .state "groups",
        url: "/groups",
        templateUrl: "app/views/groups.html"
        controller: "GroupsCtrl"
        resolve:
          auth: ($auth) ->
            $auth.validateUser()

      .state "sign_in",
        url: "/sign_in"
        templateUrl: "app/views/user_sessions/new.html"
        controller: "UserSessionsCtrl"

      .state "employees",
        url: "/employees"
        templateUrl: "app/views/employees/index.html"
        controller: "EmployeesCtrl"
        resolve:
          auth: ($auth) ->
            $auth.validateUser()

      .state "newEmployee",
        url: "/employees/new"
        templateUrl: "app/views/employees/new.html"
        controller: "NewEmployeeCtrl"
        resolve:
          auth: ($auth) ->
            $auth.validateUser()

      .state "showEmployee",
        url: "/employees/:id"
        templateUrl: "app/views/employees/show.html"
        controller: "ShowEmployeeCtrl"
        resolve:
          auth: ($auth) ->
            $auth.validateUser()

      .state "editEmployee",
        url: "/employees/:id/edit"
        templateUrl: "app/views/employees/edit.html"
        controller: "EditEmployeeCtrl"
        resolve:
          auth: ($auth) ->
            $auth.validateUser()



    $urlRouterProvider.otherwise '/'

    $locationProvider.html5Mode(
      enabled: true
    )
