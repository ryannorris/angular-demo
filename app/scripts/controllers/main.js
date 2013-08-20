'use strict';

angular.module('directiveDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.words = [
      ['Hello', 'World'],
      ['Nicer', 'Weather'],
      ['Warm', 'Soup']
    ];
  });
