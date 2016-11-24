angular.module('ProcessStApp.controllers')
  .controller('ShowController', function($scope, $routeParams, $sce, ProjectService) {

    $scope.loading = true;
    $scope.error = null;
    $scope.project = null;

    ProjectService.show($routeParams.id)
      .then(function(result) {
        $scope.project = result.data;
        $scope.loading = false;
      })
      .catch(function(error) {
        $scope.error = error;
        $scope.loading = false;
      });

  });
