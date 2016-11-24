angular.module('ProcessStApp.controllers')
  .controller('IndexController', function($scope, WistiaService) {

    $scope.loading = true;
    $scope.error = null;
    $scope.projects = [];

    WistiaService.list()
      .then(function(result) {
        $scope.projects = result.data;
        $scope.loading = false;
      })
      .catch(function(error) {
        $scope.error = error;
        $scope.loading = false;
      })
  });
