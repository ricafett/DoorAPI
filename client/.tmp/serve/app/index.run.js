(function() {
  angular.module('doorapi').run(function($log) {
    'ngInject';
    return $log.debug('runBlock end');
  }).run(function($rootScope, $location, $log) {
    $rootScope.$on('auth:login-success', function() {
      return $location.path('/');
    });
    return $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      event.preventDefault();
      $log.log(error);
      if (error.reason === "unauthorized") {
        return $location.path('/sign_in').search({
          err: "unauthorized"
        });
      }
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsQ0FDRSxDQUFDLEdBREgsQ0FDTyxTQUFDLElBQUQ7SUFDSDtXQUNBLElBQUksQ0FBQyxLQUFMLENBQVcsY0FBWDtFQUZHLENBRFAsQ0FLRSxDQUFDLEdBTEgsQ0FLTyxTQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLElBQXhCO0lBQ0gsVUFBVSxDQUFDLEdBQVgsQ0FBZSxvQkFBZixFQUFxQyxTQUFBO2FBQ25DLFNBQVMsQ0FBQyxJQUFWLENBQWUsR0FBZjtJQURtQyxDQUFyQztXQUlBLFVBQVUsQ0FBQyxHQUFYLENBQWUsbUJBQWYsRUFBb0MsU0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxVQUF0QyxFQUFrRCxLQUFsRDtNQUNsQyxLQUFLLENBQUMsY0FBTixDQUFBO01BQ0EsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFUO01BRUEsSUFBRyxLQUFLLENBQUMsTUFBTixLQUFnQixjQUFuQjtlQUNFLFNBQVMsQ0FBQyxJQUFWLENBQWUsVUFBZixDQUEwQixDQUFDLE1BQTNCLENBQWtDO1VBQUMsR0FBQSxFQUFLLGNBQU47U0FBbEMsRUFERjs7SUFKa0MsQ0FBcEM7RUFMRyxDQUxQO0FBQUEiLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2Rvb3JhcGknXG4gIC5ydW4gKCRsb2cpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRsb2cuZGVidWcgJ3J1bkJsb2NrIGVuZCdcblxuICAucnVuICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRsb2cpIC0+XG4gICAgJHJvb3RTY29wZS4kb24oJ2F1dGg6bG9naW4tc3VjY2VzcycsIC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgKVxuXG4gICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZUVycm9yJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zLCBlcnJvcikgLT5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICRsb2cubG9nKGVycm9yKVxuXG4gICAgICBpZiBlcnJvci5yZWFzb24gPT0gXCJ1bmF1dGhvcml6ZWRcIlxuICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NpZ25faW4nKS5zZWFyY2goe2VycjogXCJ1bmF1dGhvcml6ZWRcIn0pXG4gICAgKVxuIl19
