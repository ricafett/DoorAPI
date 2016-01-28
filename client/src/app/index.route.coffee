angular.module 'doorapi'
  .config ($stateProvider, $urlRouterProvider, $locationProvider) ->
    'ngInject'
    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/views/main.html'
        controller: 'MainController'
        controllerAs: 'main'
        params:
          error: {}

      .state "groups",
        url: "/groups",
        templateUrl: "app/views/groups.html"
        controller: "GroupsCtrl"
        resolve:
          auth: (Auth) ->
            Auth.currentUser()

      .state "sign_in",
        url: "/sign_in"
        templateUrl: "app/views/user_sessions/new.html"
        controller: "UserSessionsCtrl"
        params:
          error: {}

      .state "sign_out",
        url: "/sign_out"
        controller: "SignOutCtrl"
        resolve:
          auth: (Auth) ->
            Auth.currentUser()

      .state "employees",
        url: "/employees"
        templateUrl: "app/views/employees/index.html"
        controller: "EmployeesCtrl"
        resolve:
          auth: (Auth) ->
            Auth.currentUser()

      .state "newEmployee",
        url: "/employees/new"
        templateUrl: "app/views/employees/new.html"
        controller: "NewEmployeeCtrl"
        resolve:
          auth: (Auth) ->
            Auth.currentUser()

      .state "showEmployee",
        url: "/employees/:id"
        templateUrl: "app/views/employees/show.html"
        controller: "ShowEmployeeCtrl"
        resolve:
          auth: (Auth) ->
            Auth.currentUser()

      .state "editEmployee",
        url: "/employees/:id/edit"
        templateUrl: "app/views/employees/edit.html"
        controller: "EditEmployeeCtrl"
        resolve:
          auth: (Auth) ->
            Auth.currentUser()



    $urlRouterProvider.otherwise '/'

    $locationProvider.html5Mode(
      enabled: true
    )
