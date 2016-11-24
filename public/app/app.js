angular.module('ProcessStApp', ['ProcessStApp.controllers', 'ProcessStApp.services', 'ProcessStApp.directives', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when("/", {templateUrl: "app/partials/index.html", controller: "IndexController"})
      .when("/show/:id", {templateUrl: "app/partials/show.html", controller: "ShowController"})
      .when("/new/", {templateUrl: "app/partials/new.html", controller: "NewController"})
    	.otherwise({redirectTo: '/'});
  }]);

angular.module('ProcessStApp.controllers', []);
angular.module('ProcessStApp.services', []);
angular.module('ProcessStApp.directives', []);
