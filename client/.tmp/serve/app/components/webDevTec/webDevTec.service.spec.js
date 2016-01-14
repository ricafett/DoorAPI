(function() {
  describe('service webDevTec', function() {
    beforeEach(module('doorapi'));
    it('should be registered', inject(function(webDevTec) {
      return expect(webDevTec).not.toEqual(null);
    }));
    return describe('getTec function', function() {
      it('should exist', inject(function(webDevTec) {
        return expect(webDevTec.getTec).not.toEqual(null);
      }));
      return it('should return array of object', inject(function(webDevTec) {
        var data;
        data = webDevTec.getTec();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        return expect(data.length > 5).toBeTruthy();
      }));
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsUUFBQSxDQUFTLG1CQUFULEVBQThCLFNBQUE7SUFDNUIsVUFBQSxDQUFXLE1BQUEsQ0FBTyxTQUFQLENBQVg7SUFFQSxFQUFBLENBQUcsc0JBQUgsRUFBMkIsTUFBQSxDQUFPLFNBQUMsU0FBRDthQUNoQyxNQUFBLENBQU8sU0FBUCxDQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUF0QixDQUE4QixJQUE5QjtJQURnQyxDQUFQLENBQTNCO1dBR0EsUUFBQSxDQUFTLGlCQUFULEVBQTRCLFNBQUE7TUFDMUIsRUFBQSxDQUFHLGNBQUgsRUFBbUIsTUFBQSxDQUFPLFNBQUMsU0FBRDtlQUN4QixNQUFBLENBQU8sU0FBUyxDQUFDLE1BQWpCLENBQXdCLENBQUMsR0FBRyxDQUFDLE9BQTdCLENBQXFDLElBQXJDO01BRHdCLENBQVAsQ0FBbkI7YUFHQSxFQUFBLENBQUcsK0JBQUgsRUFBb0MsTUFBQSxDQUFPLFNBQUMsU0FBRDtBQUN6QyxZQUFBO1FBQUEsSUFBQSxHQUFPLFNBQVMsQ0FBQyxNQUFWLENBQUE7UUFDUCxNQUFBLENBQU8sSUFBUCxDQUFZLENBQUMsT0FBYixDQUFxQixPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQ0FBckI7UUFDQSxNQUFBLENBQU8sSUFBSyxDQUFBLENBQUEsQ0FBWixDQUFlLENBQUMsT0FBaEIsQ0FBd0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaLENBQXhCO2VBQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBckIsQ0FBdUIsQ0FBQyxVQUF4QixDQUFBO01BSnlDLENBQVAsQ0FBcEM7SUFKMEIsQ0FBNUI7RUFONEIsQ0FBOUI7QUFBQSIsImZpbGUiOiJjb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUgJ3NlcnZpY2Ugd2ViRGV2VGVjJywgKCkgLT5cbiAgYmVmb3JlRWFjaCBtb2R1bGUgJ2Rvb3JhcGknXG5cbiAgaXQgJ3Nob3VsZCBiZSByZWdpc3RlcmVkJywgaW5qZWN0ICh3ZWJEZXZUZWMpIC0+XG4gICAgZXhwZWN0KHdlYkRldlRlYykubm90LnRvRXF1YWwgbnVsbFxuXG4gIGRlc2NyaWJlICdnZXRUZWMgZnVuY3Rpb24nLCAoKSAtPlxuICAgIGl0ICdzaG91bGQgZXhpc3QnLCBpbmplY3QgKHdlYkRldlRlYykgLT5cbiAgICAgIGV4cGVjdCh3ZWJEZXZUZWMuZ2V0VGVjKS5ub3QudG9FcXVhbCBudWxsXG5cbiAgICBpdCAnc2hvdWxkIHJldHVybiBhcnJheSBvZiBvYmplY3QnLCBpbmplY3QgKHdlYkRldlRlYykgLT5cbiAgICAgIGRhdGEgPSB3ZWJEZXZUZWMuZ2V0VGVjKClcbiAgICAgIGV4cGVjdChkYXRhKS50b0VxdWFsIGphc21pbmUuYW55IEFycmF5XG4gICAgICBleHBlY3QoZGF0YVswXSkudG9FcXVhbCBqYXNtaW5lLmFueSBPYmplY3RcbiAgICAgIGV4cGVjdChkYXRhLmxlbmd0aCA+IDUpLnRvQmVUcnV0aHkoKVxuIl19