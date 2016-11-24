angular.module('ProcessStApp.controllers')
  .controller('ShowController', function($scope, $routeParams, $sce, WistiaService) {

    $scope.loading = true;
    $scope.error = null;
    $scope.project = null;

    $scope.videoUrl = '';

    WistiaService.show($routeParams.id)
      .then(function(result) {
        $scope.project = result.data;
        $scope.videoUrl = $sce.trustAsResourceUrl('//fast.wistia.com/embed/medias/' + result.data.hashedId + '.jsonp');
        $scope.loading = false;
      })
      .catch(function(error) {
        $scope.error = error;
        $scope.loading = false;
      })
  });
