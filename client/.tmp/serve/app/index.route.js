(function() {
  angular.module('doorapi').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
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
    });
    $urlRouterProvider.otherwise('/');
    return $locationProvider.html5Mode({
      enabled: true
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakIsRUFBcUMsaUJBQXJDO0lBQ047SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLE1BRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxHQUFMO01BQ0EsV0FBQSxFQUFhLG9CQURiO01BRUEsVUFBQSxFQUFZLGdCQUZaO01BR0EsWUFBQSxFQUFjLE1BSGQ7S0FGSixDQU1FLENBQUMsS0FOSCxDQU1TLFFBTlQsRUFPSTtNQUFBLEdBQUEsRUFBSyxTQUFMO01BQ0EsV0FBQSxFQUFhLHVCQURiO01BRUEsVUFBQSxFQUFZLFlBRlo7TUFHQSxPQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sU0FBQyxLQUFEO2lCQUNKLEtBQUssQ0FBQyxZQUFOLENBQUE7UUFESSxDQUFOO09BSkY7S0FQSixDQWFFLENBQUMsS0FiSCxDQWFTLFNBYlQsRUFjSTtNQUFBLEdBQUEsRUFBSyxVQUFMO01BQ0EsV0FBQSxFQUFhLGtDQURiO01BRUEsVUFBQSxFQUFZLGtCQUZaO0tBZEo7SUFrQkEsa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsR0FBN0I7V0FFQSxpQkFBaUIsQ0FBQyxTQUFsQixDQUNFO01BQUEsT0FBQSxFQUFTLElBQVQ7S0FERjtFQXRCTSxDQURWO0FBQUEiLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnZG9vcmFwaSdcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2hvbWUnLFxuICAgICAgICB1cmw6ICcvJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuICAgICAgLnN0YXRlIFwiZ3JvdXBzXCIsXG4gICAgICAgIHVybDogXCIvZ3JvdXBzXCIsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC92aWV3cy9ncm91cHMuaHRtbFwiLFxuICAgICAgICBjb250cm9sbGVyOiBcIkdyb3Vwc0N0cmxcIlxuICAgICAgICByZXNvbHZlOlxuICAgICAgICAgIGF1dGg6ICgkYXV0aCkgLT5cbiAgICAgICAgICAgICRhdXRoLnZhbGlkYXRlVXNlcigpXG4gICAgICAuc3RhdGUgXCJzaWduX2luXCIsXG4gICAgICAgIHVybDogXCIvc2lnbl9pblwiLFxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvdmlld3MvdXNlcl9zZXNzaW9ucy9uZXcuaHRtbFwiLFxuICAgICAgICBjb250cm9sbGVyOiBcIlVzZXJTZXNzaW9uc0N0cmxcIlxuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAnLydcblxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZShcbiAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICApXG4iXX0=
