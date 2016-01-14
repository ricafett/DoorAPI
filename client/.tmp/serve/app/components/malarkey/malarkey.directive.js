(function() {
  angular.module('doorapi').directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      'ngInject';
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUNFLENBQUMsU0FESCxDQUNhLGNBRGIsRUFDNkIsU0FBQTtBQUV6QixRQUFBO0lBQUEsa0JBQUEsR0FBcUIsU0FBQyxJQUFELEVBQU8saUJBQVA7TUFDbkI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsUUFBQSxHQUFXLFNBQUE7ZUFDVCxlQUFBLENBQUEsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixTQUFBO1VBQ3JCLElBQUksQ0FBQyxJQUFMLENBQVUsNkJBQVY7UUFEcUIsQ0FBdkI7TUFEUztNQUtYLGVBQUEsR0FBa0IsU0FBQTtlQUNoQixpQkFBaUIsQ0FBQyxlQUFsQixDQUFrQyxFQUFsQyxDQUFxQyxDQUFDLElBQXRDLENBQTJDLFNBQUMsSUFBRDtVQUN6QyxFQUFFLENBQUMsWUFBSCxHQUFrQjtpQkFDbEIsRUFBRSxDQUFDO1FBRnNDLENBQTNDO01BRGdCO01BS2xCLEVBQUUsQ0FBQyxZQUFILEdBQWtCO01BQ2xCLFFBQUEsQ0FBQTtJQWZtQjtJQWtCckIsUUFBQSxHQUFXLFNBQUMsS0FBRCxFQUFRLEVBQVIsRUFBWSxJQUFaLEVBQWtCLEVBQWxCO0FBQ1QsVUFBQTtNQUFBLE9BQUEsR0FBVTtNQUNWLE1BQUEsR0FBUyxRQUFBLENBQVMsRUFBRyxDQUFBLENBQUEsQ0FBWixFQUNQO1FBQUEsU0FBQSxFQUFXLEVBQVg7UUFDQSxXQUFBLEVBQWEsRUFEYjtRQUVBLFVBQUEsRUFBWSxHQUZaO1FBR0EsSUFBQSxFQUFNLElBSE47UUFJQSxPQUFBLEVBQVMsR0FKVDtPQURPO01BTVQsRUFBRSxDQUFDLFFBQUgsQ0FBWSxlQUFaO01BQ0EsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBSyxDQUFDLFdBQXRCLEVBQW1DLFNBQUMsS0FBRDtRQUNqQyxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQVosQ0FBa0IsQ0FBQyxLQUFuQixDQUFBLENBQTBCLENBQUMsUUFBRCxDQUExQixDQUFBO01BRGlDLENBQW5DO01BR0EsT0FBQSxHQUFVLEtBQUssQ0FBQyxNQUFOLENBQWEsaUJBQWIsRUFBZ0MsU0FBQTtRQUN4QyxPQUFPLENBQUMsT0FBUixDQUFnQixFQUFFLENBQUMsWUFBbkIsRUFBaUMsU0FBQyxXQUFEO1VBQy9CLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBVyxDQUFDLEtBQXhCLENBQThCLENBQUMsS0FBL0IsQ0FBQSxDQUFzQyxDQUFDLFFBQUQsQ0FBdEMsQ0FBQTtRQUQrQixDQUFqQztNQUR3QyxDQUFoQztNQU1WLEtBQUssQ0FBQyxHQUFOLENBQVUsVUFBVixFQUFzQixTQUFBO1FBQ3BCLE9BQUEsQ0FBQTtNQURvQixDQUF0QjtJQWxCUztXQXVCWCxTQUFBLEdBQ0U7TUFBQSxRQUFBLEVBQVUsR0FBVjtNQUNBLEtBQUEsRUFBTztRQUFBLFdBQUEsRUFBYSxHQUFiO09BRFA7TUFFQSxRQUFBLEVBQVUsUUFGVjtNQUdBLElBQUEsRUFBTSxRQUhOO01BSUEsVUFBQSxFQUFZLGtCQUpaO01BS0EsWUFBQSxFQUFjLElBTGQ7O0VBNUN1QixDQUQ3QjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2Rvb3JhcGknXG4gIC5kaXJlY3RpdmUgJ2FjbWVNYWxhcmtleScsIC0+XG5cbiAgICBNYWxhcmtleUNvbnRyb2xsZXIgPSAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgYWN0aXZhdGUgPSAtPlxuICAgICAgICBnZXRDb250cmlidXRvcnMoKS50aGVuIC0+XG4gICAgICAgICAgJGxvZy5pbmZvICdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgIGdldENvbnRyaWJ1dG9ycyA9IC0+XG4gICAgICAgIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbiAoZGF0YSkgLT5cbiAgICAgICAgICB2bS5jb250cmlidXRvcnMgPSBkYXRhXG4gICAgICAgICAgdm0uY29udHJpYnV0b3JzXG5cbiAgICAgIHZtLmNvbnRyaWJ1dG9ycyA9IFtdXG4gICAgICBhY3RpdmF0ZSgpXG4gICAgICByZXR1cm5cblxuICAgIGxpbmtGdW5jID0gKHNjb3BlLCBlbCwgYXR0ciwgdm0pIC0+XG4gICAgICB3YXRjaGVyID0gdW5kZWZpbmVkXG4gICAgICB0eXBpc3QgPSBtYWxhcmtleShlbFswXSxcbiAgICAgICAgdHlwZVNwZWVkOiA0MFxuICAgICAgICBkZWxldGVTcGVlZDogNDBcbiAgICAgICAgcGF1c2VEZWxheTogODAwXG4gICAgICAgIGxvb3A6IHRydWVcbiAgICAgICAgcG9zdGZpeDogJyAnKVxuICAgICAgZWwuYWRkQ2xhc3MgJ2FjbWUtbWFsYXJrZXknXG4gICAgICBhbmd1bGFyLmZvckVhY2ggc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgLT5cbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAtPlxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggdm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpIC0+XG4gICAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG4gICAgICApXG4gICAgICBzY29wZS4kb24gJyRkZXN0cm95JywgLT5cbiAgICAgICAgd2F0Y2hlcigpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgc2NvcGU6IGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7J1xuICAgICAgbGluazogbGlua0Z1bmNcbiAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4iXX0=
