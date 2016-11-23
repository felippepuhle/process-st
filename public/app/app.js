angular.module('ProcessStApp', ['ProcessStApp.controllers', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when("/", {templateUrl: "app/partials/index.html", controller: "IndexController"})
    	.otherwise({redirectTo: '/'});
  }]);
