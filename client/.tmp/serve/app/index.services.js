(function() {
  angular.module('doorapi').factory('Group', function($resource) {
    return $resource('/api/groups/:id', {
      id: "@id"
    }, {
      update: {
        method: 'PUT'
      }
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnNlcnZpY2VzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUNFLENBQUMsT0FESCxDQUNXLE9BRFgsRUFDb0IsU0FBQyxTQUFEO1dBQ2hCLFNBQUEsQ0FBVSxpQkFBVixFQUE2QjtNQUFBLEVBQUEsRUFBSSxLQUFKO0tBQTdCLEVBQXdDO01BQ3RDLE1BQUEsRUFBUTtRQUFFLE1BQUEsRUFBUSxLQUFWO09BRDhCO0tBQXhDO0VBRGdCLENBRHBCO0FBQUEiLCJmaWxlIjoiaW5kZXguc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnZG9vcmFwaSdcbiAgLmZhY3RvcnkgJ0dyb3VwJywgKCRyZXNvdXJjZSkgLT5cbiAgICAkcmVzb3VyY2UoJy9hcGkvZ3JvdXBzLzppZCcsIGlkOiBcIkBpZFwiLCB7XG4gICAgICB1cGRhdGU6IHsgbWV0aG9kOiAnUFVUJyB9XG4gICAgfSlcbiJdfQ==
