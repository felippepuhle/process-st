angular.module('ProcessStApp.directives')
  .directive('media', function($timeout, MediaService) {

    return {
      restrict: 'E',
      templateUrl: 'app/directives/media.html',
      replace: true,
      scope: {
        media: "="
      }
    };

  });
