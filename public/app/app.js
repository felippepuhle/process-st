angular.module('ProcessStApp', ['ProcessStApp.controllers', 'ProcessStApp.services', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when("/", {templateUrl: "app/partials/index.html", controller: "IndexController"})
      .when("/show/:id", {templateUrl: "app/partials/show.html", controller: "ShowController"})
    	.otherwise({redirectTo: '/'});
  }]);

angular.module('ProcessStApp.controllers', []);
angular.module('ProcessStApp.services', []);
