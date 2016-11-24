angular.module('ProcessStApp.controllers')
  .controller('IndexController', function($scope, ProjectService) {

    $scope.loading = false;
    $scope.error = null;
    $scope.success = null;
    $scope.projects = [];

    $scope.list = function() {
      $scope.loading = true;

      ProjectService.list()
        .then(function(result) {
          $scope.loading = false;
          $scope.error = null;
          $scope.projects = result.data;
        })
        .catch(function(error) {
          $scope.loading = false;
          $scope.error = error;
        });
    }
    $scope.list();

    $scope.delete = function(project) {
      if(confirm('Are you sure you want to delete "' + project.name + '" ?')) {
        ProjectService.delete(project.hashedId)
          .then(function(result) {
            $scope.success = '"' + project.name + '" deleted.';
            $scope.list();
          })
          .catch(function(error) {
            $scope.loading = false;
            $scope.error = error;
          });
      }
    }

  });
