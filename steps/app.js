var cleanScreenApp = angular.module('cleanScreenApp', [
  'ngRoute',
  'cleanScreenControllers'
]);

cleanScreenApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/steps', {
        templateUrl: '../templates/steps.html'
      })
      .when('/steps/:stepId', {
        templateUrl: '../templates/step-detail.html',
        controller: 'StepController'
      })
      .otherwise({
        redirectTo: '/steps'
      })
  ]});
