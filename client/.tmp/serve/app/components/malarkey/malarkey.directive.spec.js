
/*
@todo Complete the test
This example is not perfect.
The `link` function is not tested.
(malarkey usage, addClass, $watch, $destroy)
 */

(function() {
  describe('directive malarkey', function() {
    var element, vm;
    vm = void 0;
    element = element;
    beforeEach(module('doorapi'));
    beforeEach(inject(function($compile, $rootScope, githubContributor, $q) {
      spyOn(githubContributor, 'getContributors').and.callFake(function() {
        return $q.when([{}, {}, {}, {}, {}, {}]);
      });
      element = angular.element('<acme-malarkey extra-values="[\'Poney\', \'Monkey\']"></acme-malarkey>');
      $compile(element)($rootScope.$new());
      $rootScope.$digest();
      return vm = element.isolateScope().vm;
    }));
    it('should be compiled', function() {
      return expect(element.html()).not.toEqual(null);
    });
    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
      expect(vm.contributors).toEqual(jasmine.any(Array));
      return expect(vm.contributors.length).toEqual(6);
    });
    return it('should log a info', inject(function($log) {
      return expect($log.info.logs).toEqual(jasmine.stringMatching('Activated Contributors View'));
    }));
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztBQUFBO0VBTUEsUUFBQSxDQUFTLG9CQUFULEVBQStCLFNBQUE7QUFDN0IsUUFBQTtJQUFBLEVBQUEsR0FBSztJQUNMLE9BQUEsR0FBVTtJQUVWLFVBQUEsQ0FBVyxNQUFBLENBQU8sU0FBUCxDQUFYO0lBRUEsVUFBQSxDQUFXLE1BQUEsQ0FBTyxTQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLGlCQUF2QixFQUEwQyxFQUExQztNQUNoQixLQUFBLENBQU0saUJBQU4sRUFBeUIsaUJBQXpCLENBQTJDLENBQUMsR0FBRyxDQUFDLFFBQWhELENBQXlELFNBQUE7ZUFDdkQsRUFBRSxDQUFDLElBQUgsQ0FBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0FBUjtNQUR1RCxDQUF6RDtNQUdBLE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBUixDQUFnQix3RUFBaEI7TUFFVixRQUFBLENBQVMsT0FBVCxDQUFBLENBQWtCLFVBQVUsQ0FBQyxJQUFYLENBQUEsQ0FBbEI7TUFDQSxVQUFVLENBQUMsT0FBWCxDQUFBO2FBQ0EsRUFBQSxHQUFLLE9BQU8sQ0FBQyxZQUFSLENBQUEsQ0FBc0IsQ0FBQztJQVJaLENBQVAsQ0FBWDtJQVVBLEVBQUEsQ0FBRyxvQkFBSCxFQUF5QixTQUFBO2FBQ3ZCLE1BQUEsQ0FBTyxPQUFPLENBQUMsSUFBUixDQUFBLENBQVAsQ0FBc0IsQ0FBQyxHQUFHLENBQUMsT0FBM0IsQ0FBbUMsSUFBbkM7SUFEdUIsQ0FBekI7SUFHQSxFQUFBLENBQUcsMkRBQUgsRUFBZ0UsU0FBQTtNQUM5RCxNQUFBLENBQU8sRUFBUCxDQUFVLENBQUMsT0FBWCxDQUFtQixPQUFPLENBQUMsR0FBUixDQUFZLE1BQVosQ0FBbkI7TUFFQSxNQUFBLENBQU8sRUFBRSxDQUFDLFlBQVYsQ0FBdUIsQ0FBQyxPQUF4QixDQUFnQyxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQ0FBaEM7YUFDQSxNQUFBLENBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUF2QixDQUE4QixDQUFDLE9BQS9CLENBQXVDLENBQXZDO0lBSjhELENBQWhFO1dBTUEsRUFBQSxDQUFHLG1CQUFILEVBQXdCLE1BQUEsQ0FBTyxTQUFDLElBQUQ7YUFDN0IsTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBakIsQ0FBc0IsQ0FBQyxPQUF2QixDQUErQixPQUFPLENBQUMsY0FBUixDQUF1Qiw2QkFBdkIsQ0FBL0I7SUFENkIsQ0FBUCxDQUF4QjtFQXpCNkIsQ0FBL0I7QUFOQSIsImZpbGUiOiJjb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXG5AdG9kbyBDb21wbGV0ZSB0aGUgdGVzdFxuVGhpcyBleGFtcGxlIGlzIG5vdCBwZXJmZWN0LlxuVGhlIGBsaW5rYCBmdW5jdGlvbiBpcyBub3QgdGVzdGVkLlxuKG1hbGFya2V5IHVzYWdlLCBhZGRDbGFzcywgJHdhdGNoLCAkZGVzdHJveSlcbiMjI1xuZGVzY3JpYmUgJ2RpcmVjdGl2ZSBtYWxhcmtleScsICgpIC0+XG4gIHZtID0gdW5kZWZpbmVkXG4gIGVsZW1lbnQgPSBlbGVtZW50XG5cbiAgYmVmb3JlRWFjaCBtb2R1bGUgJ2Rvb3JhcGknXG5cbiAgYmVmb3JlRWFjaCBpbmplY3QgKCRjb21waWxlLCAkcm9vdFNjb3BlLCBnaXRodWJDb250cmlidXRvciwgJHEpIC0+XG4gICAgc3B5T24oZ2l0aHViQ29udHJpYnV0b3IsICdnZXRDb250cmlidXRvcnMnKS5hbmQuY2FsbEZha2UgKCkgLT5cbiAgICAgICRxLndoZW4gW3t9LCB7fSwge30sIHt9LCB7fSwge31dXG5cbiAgICBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50ICc8YWNtZS1tYWxhcmtleSBleHRyYS12YWx1ZXM9XCJbXFwnUG9uZXlcXCcsIFxcJ01vbmtleVxcJ11cIj48L2FjbWUtbWFsYXJrZXk+J1xuXG4gICAgJGNvbXBpbGUoZWxlbWVudCkgJHJvb3RTY29wZS4kbmV3KClcbiAgICAkcm9vdFNjb3BlLiRkaWdlc3QoKVxuICAgIHZtID0gZWxlbWVudC5pc29sYXRlU2NvcGUoKS52bVxuXG4gIGl0ICdzaG91bGQgYmUgY29tcGlsZWQnLCAoKSAtPlxuICAgIGV4cGVjdChlbGVtZW50Lmh0bWwoKSkubm90LnRvRXF1YWwgbnVsbFxuXG4gIGl0ICdzaG91bGQgaGF2ZSBpc29sYXRlIHNjb3BlIG9iamVjdCB3aXRoIGluc3RhbmNpYXRlIG1lbWJlcnMnLCAoKSAtPlxuICAgIGV4cGVjdCh2bSkudG9FcXVhbCBqYXNtaW5lLmFueSBPYmplY3RcblxuICAgIGV4cGVjdCh2bS5jb250cmlidXRvcnMpLnRvRXF1YWwgamFzbWluZS5hbnkgQXJyYXlcbiAgICBleHBlY3Qodm0uY29udHJpYnV0b3JzLmxlbmd0aCkudG9FcXVhbCA2XG5cbiAgaXQgJ3Nob3VsZCBsb2cgYSBpbmZvJywgaW5qZWN0ICgkbG9nKSAtPlxuICAgIGV4cGVjdCgkbG9nLmluZm8ubG9ncykudG9FcXVhbCBqYXNtaW5lLnN0cmluZ01hdGNoaW5nICdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnXG4iXX0=
