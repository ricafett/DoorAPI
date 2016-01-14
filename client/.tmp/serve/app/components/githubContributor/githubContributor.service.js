(function() {
  angular.module('doorapi').factory('githubContributor', function($log, $http) {
    'ngInject';
    var apiHost, getContributors, service;
    apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
    getContributors = function(limit) {
      var getContributorsComplete, getContributorsFailed;
      if (limit == null) {
        limit = 30;
      }
      getContributorsComplete = function(response) {
        return response.data;
      };
      getContributorsFailed = function(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      };
      return $http.get(apiHost + '/contributors?per_page=' + limit).then(getContributorsComplete)["catch"](getContributorsFailed);
    };
    return service = {
      apiHost: apiHost,
      getContributors: getContributors
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxtQkFEWCxFQUNnQyxTQUFDLElBQUQsRUFBTyxLQUFQO0lBQzVCO0FBQUEsUUFBQTtJQUNBLE9BQUEsR0FBVTtJQUVWLGVBQUEsR0FBa0IsU0FBQyxLQUFEO0FBRWhCLFVBQUE7O1FBRmlCLFFBQU07O01BRXZCLHVCQUFBLEdBQTBCLFNBQUMsUUFBRDtlQUN4QixRQUFRLENBQUM7TUFEZTtNQUcxQixxQkFBQSxHQUF3QixTQUFDLEtBQUQ7UUFDdEIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxtQ0FBQSxHQUFzQyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQUssQ0FBQyxJQUFyQixFQUEyQixJQUEzQixDQUFqRDtNQURzQjthQUl4QixLQUFLLENBQUMsR0FBTixDQUFVLE9BQUEsR0FBVSx5QkFBVixHQUFzQyxLQUFoRCxDQUFzRCxDQUFDLElBQXZELENBQTRELHVCQUE1RCxDQUFvRixDQUFDLE9BQUQsQ0FBcEYsQ0FBMkYscUJBQTNGO0lBVGdCO1dBV2xCLE9BQUEsR0FDRTtNQUFBLE9BQUEsRUFBUyxPQUFUO01BQ0EsZUFBQSxFQUFpQixlQURqQjs7RUFoQjBCLENBRGhDO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2Rvb3JhcGknXG4gIC5mYWN0b3J5ICdnaXRodWJDb250cmlidXRvcicsICgkbG9nLCAkaHR0cCkgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInXG5cbiAgICBnZXRDb250cmlidXRvcnMgPSAobGltaXQ9MzApIC0+XG5cbiAgICAgIGdldENvbnRyaWJ1dG9yc0NvbXBsZXRlID0gKHJlc3BvbnNlKSAtPlxuICAgICAgICByZXNwb25zZS5kYXRhXG5cbiAgICAgIGdldENvbnRyaWJ1dG9yc0ZhaWxlZCA9IChlcnJvcikgLT5cbiAgICAgICAgJGxvZy5lcnJvciAnWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKVxuICAgICAgICByZXR1cm5cblxuICAgICAgJGh0dHAuZ2V0KGFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpLnRoZW4oZ2V0Q29udHJpYnV0b3JzQ29tcGxldGUpLmNhdGNoIGdldENvbnRyaWJ1dG9yc0ZhaWxlZFxuXG4gICAgc2VydmljZSA9XG4gICAgICBhcGlIb3N0OiBhcGlIb3N0XG4gICAgICBnZXRDb250cmlidXRvcnM6IGdldENvbnRyaWJ1dG9yc1xuIl19
