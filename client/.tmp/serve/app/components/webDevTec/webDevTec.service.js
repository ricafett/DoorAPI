(function() {
  angular.module('doorapi').service('webDevTec', function() {
    'ngInject';
    var data, getTec;
    data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }, {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      }, {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      }, {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      }, {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      }, {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      }, {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      }, {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'ui-bootstrap.png'
      }, {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      }, {
        'title': 'CoffeeScript',
        'url': 'http://coffeescript.org/',
        'description': 'CoffeeScript, \'a little language that compiles into JavaScript\'.',
        'logo': 'coffeescript.png'
      }, {
        'key': 'jade',
        'title': 'Jade',
        'url': 'http://jade-lang.com/',
        'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
        'logo': 'jade.png'
      }
    ];
    getTec = function() {
      return data;
    };
    this.getTec = getTec;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUNFLENBQUMsT0FESCxDQUNXLFdBRFgsRUFDd0IsU0FBQTtJQUNwQjtBQUFBLFFBQUE7SUFDQSxJQUFBLEdBQU87TUFDTDtRQUNFLE9BQUEsRUFBUyxXQURYO1FBRUUsS0FBQSxFQUFPLHdCQUZUO1FBR0UsYUFBQSxFQUFlLDZCQUhqQjtRQUlFLE1BQUEsRUFBUSxhQUpWO09BREssRUFPTDtRQUNFLE9BQUEsRUFBUyxhQURYO1FBRUUsS0FBQSxFQUFPLHdCQUZUO1FBR0UsYUFBQSxFQUFlLDJDQUhqQjtRQUlFLE1BQUEsRUFBUSxpQkFKVjtPQVBLLEVBYUw7UUFDRSxPQUFBLEVBQVMsUUFEWDtRQUVFLEtBQUEsRUFBTyxvQkFGVDtRQUdFLGFBQUEsRUFBZSw2QkFIakI7UUFJRSxNQUFBLEVBQVEsVUFKVjtPQWJLLEVBbUJMO1FBQ0UsT0FBQSxFQUFTLFNBRFg7UUFFRSxLQUFBLEVBQU8sMkJBRlQ7UUFHRSxhQUFBLEVBQWUsNkJBSGpCO1FBSUUsTUFBQSxFQUFRLGFBSlY7T0FuQkssRUF5Qkw7UUFDRSxPQUFBLEVBQVMsT0FEWDtRQUVFLEtBQUEsRUFBTyxnQ0FGVDtRQUdFLGFBQUEsRUFBZSx5Q0FIakI7UUFJRSxNQUFBLEVBQVEsV0FKVjtPQXpCSyxFQStCTDtRQUNFLE9BQUEsRUFBUyxZQURYO1FBRUUsS0FBQSxFQUFPLHVDQUZUO1FBR0UsYUFBQSxFQUFlLG1GQUhqQjtRQUlFLE1BQUEsRUFBUSxnQkFKVjtPQS9CSyxFQXFDTDtRQUNFLE9BQUEsRUFBUyxXQURYO1FBRUUsS0FBQSxFQUFPLDBCQUZUO1FBR0UsYUFBQSxFQUFlLHdIQUhqQjtRQUlFLE1BQUEsRUFBUSxlQUpWO09BckNLLEVBMkNMO1FBQ0UsT0FBQSxFQUFTLHNCQURYO1FBRUUsS0FBQSxFQUFPLHdDQUZUO1FBR0UsYUFBQSxFQUFlLHVFQUhqQjtRQUlFLE1BQUEsRUFBUSxrQkFKVjtPQTNDSyxFQWlETDtRQUNFLE9BQUEsRUFBUyxhQURYO1FBRUUsS0FBQSxFQUFPLG1DQUZUO1FBR0UsYUFBQSxFQUFlLHlGQUhqQjtRQUlFLE1BQUEsRUFBUSxlQUpWO09BakRLLEVBdURMO1FBQ0UsT0FBQSxFQUFTLGNBRFg7UUFFRSxLQUFBLEVBQU8sMEJBRlQ7UUFHRSxhQUFBLEVBQWUsb0VBSGpCO1FBSUUsTUFBQSxFQUFRLGtCQUpWO09BdkRLLEVBNkRMO1FBQ0UsS0FBQSxFQUFPLE1BRFQ7UUFFRSxPQUFBLEVBQVMsTUFGWDtRQUdFLEtBQUEsRUFBTyx1QkFIVDtRQUlFLGFBQUEsRUFBZSxpSEFKakI7UUFLRSxNQUFBLEVBQVEsVUFMVjtPQTdESzs7SUFzRVAsTUFBQSxHQUFTLFNBQUE7YUFDUDtJQURPO0lBR1QsSUFBQyxDQUFBLE1BQUQsR0FBVTtFQTNFVSxDQUR4QjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2Rvb3JhcGknXG4gIC5zZXJ2aWNlICd3ZWJEZXZUZWMnLCAoKSAtPlxuICAgICduZ0luamVjdCdcbiAgICBkYXRhID0gW1xuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFyIFVJIEJvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcbiAgICAgICAgJ2xvZ28nOiAndWktYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQ29mZmVlU2NyaXB0JyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vY29mZmVlc2NyaXB0Lm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQ29mZmVlU2NyaXB0LCBcXCdhIGxpdHRsZSBsYW5ndWFnZSB0aGF0IGNvbXBpbGVzIGludG8gSmF2YVNjcmlwdFxcJy4nLFxuICAgICAgICAnbG9nbyc6ICdjb2ZmZWVzY3JpcHQucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2tleSc6ICdqYWRlJyxcbiAgICAgICAgJ3RpdGxlJzogJ0phZGUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYWRlLWxhbmcuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdKYWRlIGlzIGEgaGlnaCBwZXJmb3JtYW5jZSB0ZW1wbGF0ZSBlbmdpbmUgaGVhdmlseSBpbmZsdWVuY2VkIGJ5IEhhbWwgYW5kIGltcGxlbWVudGVkIHdpdGggSmF2YVNjcmlwdCBmb3Igbm9kZS4nLFxuICAgICAgICAnbG9nbyc6ICdqYWRlLnBuZydcbiAgICAgIH1cbiAgICBdXG5cbiAgICBnZXRUZWMgPSAtPlxuICAgICAgZGF0YVxuXG4gICAgQGdldFRlYyA9IGdldFRlY1xuICAgIHJldHVyblxuIl19
