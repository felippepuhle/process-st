angular.module('ProcessStApp.controllers')
  .controller('ShowController', function($scope, $routeParams, $sce, WistiaService) {

    $scope.loading = true;
    $scope.error = null;
    $scope.project = null;

    WistiaService.show($routeParams.id)
      .then(function(result) {
        $scope.project = result.data;
        $scope.loading = false;
      })
      .catch(function(error) {
        $scope.error = error;
        $scope.loading = false;
      });

  });
