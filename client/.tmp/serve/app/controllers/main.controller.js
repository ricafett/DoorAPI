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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL21haW4uY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYyxnQkFEZCxFQUNnQyxTQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCO0lBQzVCO0FBQUEsUUFBQTtJQUNBLEVBQUEsR0FBSztJQUNMLFFBQUEsR0FBVyxTQUFBO01BQ1QsWUFBQSxDQUFBO01BQ0EsUUFBQSxDQUFTLENBQUMsU0FBQTtRQUNSLEVBQUUsQ0FBQyxjQUFILEdBQW9CO01BRFosQ0FBRCxDQUFULEVBR0csSUFISDtJQUZTO0lBUVgsVUFBQSxHQUFhLFNBQUE7TUFDWCxNQUFNLENBQUMsSUFBUCxDQUFZLGtIQUFaO01BQ0EsRUFBRSxDQUFDLGNBQUgsR0FBb0I7SUFGVDtJQUtiLFlBQUEsR0FBZSxTQUFBO01BQ2IsRUFBRSxDQUFDLGFBQUgsR0FBbUIsU0FBUyxDQUFDLE1BQVYsQ0FBQTtNQUNuQixPQUFPLENBQUMsT0FBUixDQUFnQixFQUFFLENBQUMsYUFBbkIsRUFBa0MsU0FBQyxZQUFEO1FBQ2hDLFlBQVksQ0FBQyxJQUFiLEdBQW9CLElBQUksQ0FBQyxNQUFMLENBQUE7TUFEWSxDQUFsQztJQUZhO0lBT2YsRUFBRSxDQUFDLGFBQUgsR0FBbUI7SUFDbkIsRUFBRSxDQUFDLGNBQUgsR0FBb0I7SUFDcEIsRUFBRSxDQUFDLFlBQUgsR0FBa0I7SUFDbEIsRUFBRSxDQUFDLFVBQUgsR0FBZ0I7SUFDaEIsUUFBQSxDQUFBO0VBM0I0QixDQURoQztBQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL21haW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdkb29yYXBpJ1xuICAuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICB2bSA9IHRoaXNcbiAgICBhY3RpdmF0ZSA9IC0+XG4gICAgICBnZXRXZWJEZXZUZWMoKVxuICAgICAgJHRpbWVvdXQgKC0+XG4gICAgICAgIHZtLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnXG4gICAgICAgIHJldHVyblxuICAgICAgKSwgNDAwMFxuICAgICAgcmV0dXJuXG5cbiAgICBzaG93VG9hc3RyID0gLT5cbiAgICAgIHRvYXN0ci5pbmZvICdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPidcbiAgICAgIHZtLmNsYXNzQW5pbWF0aW9uID0gJydcbiAgICAgIHJldHVyblxuXG4gICAgZ2V0V2ViRGV2VGVjID0gLT5cbiAgICAgIHZtLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKClcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCB2bS5hd2Vzb21lVGhpbmdzLCAoYXdlc29tZVRoaW5nKSAtPlxuICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgcmV0dXJuXG4gICAgICByZXR1cm5cblxuICAgIHZtLmF3ZXNvbWVUaGluZ3MgPSBbXVxuICAgIHZtLmNsYXNzQW5pbWF0aW9uID0gJydcbiAgICB2bS5jcmVhdGlvbkRhdGUgPSAxNDUyNzc2ODA3MzU0XG4gICAgdm0uc2hvd1RvYXN0ciA9IHNob3dUb2FzdHJcbiAgICBhY3RpdmF0ZSgpXG4gICAgcmV0dXJuXG4iXX0=
