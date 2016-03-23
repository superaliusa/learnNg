angular.module('learnNg', []);


angular.module('learnNg')
        .directive('navBar', function(){
          return {
            templateUrl: 'html/templates/nav.html',
          };
        });
