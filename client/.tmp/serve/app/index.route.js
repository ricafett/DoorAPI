(function() {
  angular.module('doorapi').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/views/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state("groups", {
      url: "/groups",
      templateUrl: "app/views/groups.html",
      controller: "GroupsCtrl",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    }).state("sign_in", {
      url: "/sign_in",
      templateUrl: "app/views/user_sessions/new.html",
      controller: "UserSessionsCtrl"
    }).state("employees", {
      url: "/employees",
      templateUrl: "app/views/employees/index.html",
      controller: "EmployeesCtrl",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    }).state("newEmployee", {
      url: "/employees/new",
      templateUrl: "app/views/employees/new.html",
      controller: "NewEmployeeCtrl",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    }).state("showEmployee", {
      url: "/employees/:id",
      templateUrl: "app/views/employees/show.html",
      controller: "ShowEmployeeCtrl",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    }).state("editEmployee", {
      url: "/employees/:id/edit",
      templateUrl: "app/views/employees/edit.html",
      controller: "EditEmployeeCtrl",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    });
    $urlRouterProvider.otherwise('/');
    return $locationProvider.html5Mode({
      enabled: true
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakIsRUFBcUMsaUJBQXJDO0lBQ047SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLE1BRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxHQUFMO01BQ0EsV0FBQSxFQUFhLHFCQURiO01BRUEsVUFBQSxFQUFZLGdCQUZaO01BR0EsWUFBQSxFQUFjLE1BSGQ7S0FGSixDQU9FLENBQUMsS0FQSCxDQU9TLFFBUFQsRUFRSTtNQUFBLEdBQUEsRUFBSyxTQUFMO01BQ0EsV0FBQSxFQUFhLHVCQURiO01BRUEsVUFBQSxFQUFZLFlBRlo7TUFHQSxPQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sU0FBQyxLQUFEO2lCQUNKLEtBQUssQ0FBQyxZQUFOLENBQUE7UUFESSxDQUFOO09BSkY7S0FSSixDQWVFLENBQUMsS0FmSCxDQWVTLFNBZlQsRUFnQkk7TUFBQSxHQUFBLEVBQUssVUFBTDtNQUNBLFdBQUEsRUFBYSxrQ0FEYjtNQUVBLFVBQUEsRUFBWSxrQkFGWjtLQWhCSixDQW9CRSxDQUFDLEtBcEJILENBb0JTLFdBcEJULEVBcUJJO01BQUEsR0FBQSxFQUFLLFlBQUw7TUFDQSxXQUFBLEVBQWEsZ0NBRGI7TUFFQSxVQUFBLEVBQVksZUFGWjtNQUdBLE9BQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxTQUFDLEtBQUQ7aUJBQ0osS0FBSyxDQUFDLFlBQU4sQ0FBQTtRQURJLENBQU47T0FKRjtLQXJCSixDQTRCRSxDQUFDLEtBNUJILENBNEJTLGFBNUJULEVBNkJJO01BQUEsR0FBQSxFQUFLLGdCQUFMO01BQ0EsV0FBQSxFQUFhLDhCQURiO01BRUEsVUFBQSxFQUFZLGlCQUZaO01BR0EsT0FBQSxFQUNFO1FBQUEsSUFBQSxFQUFNLFNBQUMsS0FBRDtpQkFDSixLQUFLLENBQUMsWUFBTixDQUFBO1FBREksQ0FBTjtPQUpGO0tBN0JKLENBb0NFLENBQUMsS0FwQ0gsQ0FvQ1MsY0FwQ1QsRUFxQ0k7TUFBQSxHQUFBLEVBQUssZ0JBQUw7TUFDQSxXQUFBLEVBQWEsK0JBRGI7TUFFQSxVQUFBLEVBQVksa0JBRlo7TUFHQSxPQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sU0FBQyxLQUFEO2lCQUNKLEtBQUssQ0FBQyxZQUFOLENBQUE7UUFESSxDQUFOO09BSkY7S0FyQ0osQ0E0Q0UsQ0FBQyxLQTVDSCxDQTRDUyxjQTVDVCxFQTZDSTtNQUFBLEdBQUEsRUFBSyxxQkFBTDtNQUNBLFdBQUEsRUFBYSwrQkFEYjtNQUVBLFVBQUEsRUFBWSxrQkFGWjtNQUdBLE9BQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxTQUFDLEtBQUQ7aUJBQ0osS0FBSyxDQUFDLFlBQU4sQ0FBQTtRQURJLENBQU47T0FKRjtLQTdDSjtJQXNEQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtXQUVBLGlCQUFpQixDQUFDLFNBQWxCLENBQ0U7TUFBQSxPQUFBLEVBQVMsSUFBVDtLQURGO0VBMURNLENBRFY7QUFBQSIsImZpbGUiOiJpbmRleC5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdkb29yYXBpJ1xuICAuY29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnaG9tZScsXG4gICAgICAgIHVybDogJy8nXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3ZpZXdzL21haW4uaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuXG4gICAgICAuc3RhdGUgXCJncm91cHNcIixcbiAgICAgICAgdXJsOiBcIi9ncm91cHNcIixcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3ZpZXdzL2dyb3Vwcy5odG1sXCJcbiAgICAgICAgY29udHJvbGxlcjogXCJHcm91cHNDdHJsXCJcbiAgICAgICAgcmVzb2x2ZTpcbiAgICAgICAgICBhdXRoOiAoJGF1dGgpIC0+XG4gICAgICAgICAgICAkYXV0aC52YWxpZGF0ZVVzZXIoKVxuXG4gICAgICAuc3RhdGUgXCJzaWduX2luXCIsXG4gICAgICAgIHVybDogXCIvc2lnbl9pblwiXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC92aWV3cy91c2VyX3Nlc3Npb25zL25ldy5odG1sXCJcbiAgICAgICAgY29udHJvbGxlcjogXCJVc2VyU2Vzc2lvbnNDdHJsXCJcblxuICAgICAgLnN0YXRlIFwiZW1wbG95ZWVzXCIsXG4gICAgICAgIHVybDogXCIvZW1wbG95ZWVzXCJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3ZpZXdzL2VtcGxveWVlcy9pbmRleC5odG1sXCJcbiAgICAgICAgY29udHJvbGxlcjogXCJFbXBsb3llZXNDdHJsXCJcbiAgICAgICAgcmVzb2x2ZTpcbiAgICAgICAgICBhdXRoOiAoJGF1dGgpIC0+XG4gICAgICAgICAgICAkYXV0aC52YWxpZGF0ZVVzZXIoKVxuXG4gICAgICAuc3RhdGUgXCJuZXdFbXBsb3llZVwiLFxuICAgICAgICB1cmw6IFwiL2VtcGxveWVlcy9uZXdcIlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvdmlld3MvZW1wbG95ZWVzL25ldy5odG1sXCJcbiAgICAgICAgY29udHJvbGxlcjogXCJOZXdFbXBsb3llZUN0cmxcIlxuICAgICAgICByZXNvbHZlOlxuICAgICAgICAgIGF1dGg6ICgkYXV0aCkgLT5cbiAgICAgICAgICAgICRhdXRoLnZhbGlkYXRlVXNlcigpXG5cbiAgICAgIC5zdGF0ZSBcInNob3dFbXBsb3llZVwiLFxuICAgICAgICB1cmw6IFwiL2VtcGxveWVlcy86aWRcIlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvdmlld3MvZW1wbG95ZWVzL3Nob3cuaHRtbFwiXG4gICAgICAgIGNvbnRyb2xsZXI6IFwiU2hvd0VtcGxveWVlQ3RybFwiXG4gICAgICAgIHJlc29sdmU6XG4gICAgICAgICAgYXV0aDogKCRhdXRoKSAtPlxuICAgICAgICAgICAgJGF1dGgudmFsaWRhdGVVc2VyKClcblxuICAgICAgLnN0YXRlIFwiZWRpdEVtcGxveWVlXCIsXG4gICAgICAgIHVybDogXCIvZW1wbG95ZWVzLzppZC9lZGl0XCJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3ZpZXdzL2VtcGxveWVlcy9lZGl0Lmh0bWxcIlxuICAgICAgICBjb250cm9sbGVyOiBcIkVkaXRFbXBsb3llZUN0cmxcIlxuICAgICAgICByZXNvbHZlOlxuICAgICAgICAgIGF1dGg6ICgkYXV0aCkgLT5cbiAgICAgICAgICAgICRhdXRoLnZhbGlkYXRlVXNlcigpXG5cblxuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAnLydcblxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZShcbiAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICApXG4iXX0=
