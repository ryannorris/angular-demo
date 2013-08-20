'use strict'; 

angular.module('directiveDemoApp')
.directive('foobar', function($log) {

  var words = [];

  return {
    template: '<button class="btn" ng-click="showWords()">{{concat}}</button>',
    restrict: 'E',
    scope: {
      foo: '=',
      bar: '='
    },
    link: {
      pre: function(scope, elm, attrs) {
        scope.concat = scope.foo + ' ' + scope.bar;
      }
    },
    controller: function($window, $scope) {
      $scope.showWords = function() {
        $window.alert('the words are ' + $scope.foo + ' and ' + $scope.bar);
      };
    }
  };
});
