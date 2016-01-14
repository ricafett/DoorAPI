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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL21haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmLENBQ0UsQ0FBQyxVQURILENBQ2MsZ0JBRGQsRUFDZ0MsU0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixNQUF0QjtJQUM1QjtBQUFBLFFBQUE7SUFDQSxFQUFBLEdBQUs7SUFDTCxRQUFBLEdBQVcsU0FBQTtNQUNULFlBQUEsQ0FBQTtNQUNBLFFBQUEsQ0FBUyxDQUFDLFNBQUE7UUFDUixFQUFFLENBQUMsY0FBSCxHQUFvQjtNQURaLENBQUQsQ0FBVCxFQUdHLElBSEg7SUFGUztJQVFYLFVBQUEsR0FBYSxTQUFBO01BQ1gsTUFBTSxDQUFDLElBQVAsQ0FBWSxrSEFBWjtNQUNBLEVBQUUsQ0FBQyxjQUFILEdBQW9CO0lBRlQ7SUFLYixZQUFBLEdBQWUsU0FBQTtNQUNiLEVBQUUsQ0FBQyxhQUFILEdBQW1CLFNBQVMsQ0FBQyxNQUFWLENBQUE7TUFDbkIsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsRUFBRSxDQUFDLGFBQW5CLEVBQWtDLFNBQUMsWUFBRDtRQUNoQyxZQUFZLENBQUMsSUFBYixHQUFvQixJQUFJLENBQUMsTUFBTCxDQUFBO01BRFksQ0FBbEM7SUFGYTtJQU9mLEVBQUUsQ0FBQyxhQUFILEdBQW1CO0lBQ25CLEVBQUUsQ0FBQyxjQUFILEdBQW9CO0lBQ3BCLEVBQUUsQ0FBQyxZQUFILEdBQWtCO0lBQ2xCLEVBQUUsQ0FBQyxVQUFILEdBQWdCO0lBQ2hCLFFBQUEsQ0FBQTtFQTNCNEIsQ0FEaEM7QUFBQSIsImZpbGUiOiJjb250cm9sbGVycy9tYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2Rvb3JhcGknXG4gIC5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgIHZtID0gdGhpc1xuICAgIGFjdGl2YXRlID0gLT5cbiAgICAgIGdldFdlYkRldlRlYygpXG4gICAgICAkdGltZW91dCAoLT5cbiAgICAgICAgdm0uY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCdcbiAgICAgICAgcmV0dXJuXG4gICAgICApLCA0MDAwXG4gICAgICByZXR1cm5cblxuICAgIHNob3dUb2FzdHIgPSAtPlxuICAgICAgdG9hc3RyLmluZm8gJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+J1xuICAgICAgdm0uY2xhc3NBbmltYXRpb24gPSAnJ1xuICAgICAgcmV0dXJuXG5cbiAgICBnZXRXZWJEZXZUZWMgPSAtPlxuICAgICAgdm0uYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKVxuICAgICAgYW5ndWxhci5mb3JFYWNoIHZtLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpIC0+XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKVxuICAgICAgICByZXR1cm5cbiAgICAgIHJldHVyblxuXG4gICAgdm0uYXdlc29tZVRoaW5ncyA9IFtdXG4gICAgdm0uY2xhc3NBbmltYXRpb24gPSAnJ1xuICAgIHZtLmNyZWF0aW9uRGF0ZSA9IDE0NTI3NzY4MDczNTRcbiAgICB2bS5zaG93VG9hc3RyID0gc2hvd1RvYXN0clxuICAgIGFjdGl2YXRlKClcbiAgICByZXR1cm5cbiJdfQ==
