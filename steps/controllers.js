var cleanScreenControllers = angular.module('cleanScreenControllers', [])

cleanScreenControllers
  .controller('cleanScreenController',
    ['$scope', '$http', function($scope, $http) {
      $http.get('steps/steps.json').success(function(data) {
        $scope.steps = data;
      });
      $scope.orderProp = 'number';
    }]);

cleanScreenControllers.controller('cleanScreenController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.stepId = $routeParams.routeId;
  }
]
