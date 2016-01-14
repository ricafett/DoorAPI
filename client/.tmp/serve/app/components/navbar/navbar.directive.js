(function() {
  angular.module('doorapi').directive('acmeNavbar', function() {
    var NavbarController, directive;
    NavbarController = function(moment) {
      'ngInject';
      var vm;
      vm = this;
      vm.relativeDate = moment(vm.creationDate).fromNow();
    };
    return directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFBO0FBRXZCLFFBQUE7SUFBQSxnQkFBQSxHQUFtQixTQUFDLE1BQUQ7TUFDakI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsRUFBRSxDQUFDLFlBQUgsR0FBa0IsTUFBQSxDQUFPLEVBQUUsQ0FBQyxZQUFWLENBQXVCLENBQUMsT0FBeEIsQ0FBQTtJQUpEO1dBT25CLFNBQUEsR0FDRTtNQUFBLFFBQUEsRUFBVSxHQUFWO01BQ0EsV0FBQSxFQUFhLG1DQURiO01BRUEsS0FBQSxFQUFPO1FBQUEsWUFBQSxFQUFjLEdBQWQ7T0FGUDtNQUdBLFVBQUEsRUFBWSxnQkFIWjtNQUlBLFlBQUEsRUFBYyxJQUpkO01BS0EsZ0JBQUEsRUFBa0IsSUFMbEI7O0VBVnFCLENBRDNCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdkb29yYXBpJ1xuICAuZGlyZWN0aXZlICdhY21lTmF2YmFyJywgLT5cblxuICAgIE5hdmJhckNvbnRyb2xsZXIgPSAobW9tZW50KSAtPlxuICAgICAgJ25nSW5qZWN0J1xuICAgICAgdm0gPSB0aGlzXG4gICAgICAjIFwidm0uY3JlYXRpb25cIiBpcyBhdmFpYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICAgIHZtLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh2bS5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKVxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnXG4gICAgICBzY29wZTogY3JlYXRpb25EYXRlOiAnPSdcbiAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuIl19
