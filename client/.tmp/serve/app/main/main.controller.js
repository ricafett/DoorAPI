(function() {
  angular.module('doorapi').controller('MainController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var activate, getWebDevTec, showToastr, vm;
    vm = this;
    activate = function() {
      getWebDevTec();
      $timeout((function() {
        vm.classAnimation = 'rubberBand';
      }), 4000);
    };
    showToastr = function() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    };
    getWebDevTec = function() {
      vm.awesomeThings = webDevTec.getTec();
      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    };
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1452776807354;
    vm.showToastr = showToastr;
    activate();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUNFLENBQUMsVUFESCxDQUNjLGdCQURkLEVBQ2dDLFNBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEI7SUFDNUI7QUFBQSxRQUFBO0lBQ0EsRUFBQSxHQUFLO0lBQ0wsUUFBQSxHQUFXLFNBQUE7TUFDVCxZQUFBLENBQUE7TUFDQSxRQUFBLENBQVMsQ0FBQyxTQUFBO1FBQ1IsRUFBRSxDQUFDLGNBQUgsR0FBb0I7TUFEWixDQUFELENBQVQsRUFHRyxJQUhIO0lBRlM7SUFRWCxVQUFBLEdBQWEsU0FBQTtNQUNYLE1BQU0sQ0FBQyxJQUFQLENBQVksa0hBQVo7TUFDQSxFQUFFLENBQUMsY0FBSCxHQUFvQjtJQUZUO0lBS2IsWUFBQSxHQUFlLFNBQUE7TUFDYixFQUFFLENBQUMsYUFBSCxHQUFtQixTQUFTLENBQUMsTUFBVixDQUFBO01BQ25CLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEVBQUUsQ0FBQyxhQUFuQixFQUFrQyxTQUFDLFlBQUQ7UUFDaEMsWUFBWSxDQUFDLElBQWIsR0FBb0IsSUFBSSxDQUFDLE1BQUwsQ0FBQTtNQURZLENBQWxDO0lBRmE7SUFPZixFQUFFLENBQUMsYUFBSCxHQUFtQjtJQUNuQixFQUFFLENBQUMsY0FBSCxHQUFvQjtJQUNwQixFQUFFLENBQUMsWUFBSCxHQUFrQjtJQUNsQixFQUFFLENBQUMsVUFBSCxHQUFnQjtJQUNoQixRQUFBLENBQUE7RUEzQjRCLENBRGhDO0FBQUEiLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnZG9vcmFwaSdcbiAgLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgdm0gPSB0aGlzXG4gICAgYWN0aXZhdGUgPSAtPlxuICAgICAgZ2V0V2ViRGV2VGVjKClcbiAgICAgICR0aW1lb3V0ICgtPlxuICAgICAgICB2bS5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJ1xuICAgICAgICByZXR1cm5cbiAgICAgICksIDQwMDBcbiAgICAgIHJldHVyblxuXG4gICAgc2hvd1RvYXN0ciA9IC0+XG4gICAgICB0b2FzdHIuaW5mbyAnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nXG4gICAgICB2bS5jbGFzc0FuaW1hdGlvbiA9ICcnXG4gICAgICByZXR1cm5cblxuICAgIGdldFdlYkRldlRlYyA9IC0+XG4gICAgICB2bS5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpXG4gICAgICBhbmd1bGFyLmZvckVhY2ggdm0uYXdlc29tZVRoaW5ncywgKGF3ZXNvbWVUaGluZykgLT5cbiAgICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5cbiAgICB2bS5hd2Vzb21lVGhpbmdzID0gW11cbiAgICB2bS5jbGFzc0FuaW1hdGlvbiA9ICcnXG4gICAgdm0uY3JlYXRpb25EYXRlID0gMTQ1Mjc3NjgwNzM1NFxuICAgIHZtLnNob3dUb2FzdHIgPSBzaG93VG9hc3RyXG4gICAgYWN0aXZhdGUoKVxuICAgIHJldHVyblxuIl19
