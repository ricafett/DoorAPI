(function() {
  angular.module('doorapi').run(function($log) {
    'ngInject';
    return $log.debug('runBlock end');
  });

  angular.module('doorapi').run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/');
  });
}]);;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsQ0FDRSxDQUFDLEdBREgsQ0FDTyxTQUFDLElBQUQ7SUFDSDtXQUNBLElBQUksQ0FBQyxLQUFMLENBQVcsY0FBWDtFQUZHLENBRFA7O0VBS0E7Ozs7O0FBTEEiLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2Rvb3JhcGknXG4gIC5ydW4gKCRsb2cpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRsb2cuZGVidWcgJ3J1bkJsb2NrIGVuZCdcblxuYGFuZ3VsYXIubW9kdWxlKCdkb29yYXBpJykucnVuKFsnJHJvb3RTY29wZScsICckbG9jYXRpb24nLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJHJvb3RTY29wZS4kb24oJ2F1dGg6bG9naW4tc3VjY2VzcycsIGZ1bmN0aW9uKCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gIH0pO1xufV0pO2BcbiJdfQ==
