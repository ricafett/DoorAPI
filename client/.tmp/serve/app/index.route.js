(function() {
  angular.module('doorapi').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state("groups", {
      url: "/groups",
      templateUrl: "app/views/groups.html",
      controller: "GroupsCtrl"
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakI7SUFDTjtJQUNBLGNBQ0UsQ0FBQyxLQURILENBQ1MsTUFEVCxFQUVJO01BQUEsR0FBQSxFQUFLLEdBQUw7TUFDQSxXQUFBLEVBQWEsb0JBRGI7TUFFQSxVQUFBLEVBQVksZ0JBRlo7TUFHQSxZQUFBLEVBQWMsTUFIZDtLQUZKLENBTUUsQ0FBQyxLQU5ILENBTVMsUUFOVCxFQU9JO01BQUEsR0FBQSxFQUFLLFNBQUw7TUFDQSxXQUFBLEVBQWEsdUJBRGI7TUFFQSxVQUFBLEVBQVksWUFGWjtLQVBKO1dBV0Esa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsR0FBN0I7RUFiTSxDQURWO0FBQUEiLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnZG9vcmFwaSdcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnaG9tZScsXG4gICAgICAgIHVybDogJy8nXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgICAuc3RhdGUgXCJncm91cHNcIixcbiAgICAgICAgdXJsOiBcIi9ncm91cHNcIixcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3ZpZXdzL2dyb3Vwcy5odG1sXCIsXG4gICAgICAgIGNvbnRyb2xsZXI6IFwiR3JvdXBzQ3RybFwiXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuIl19
