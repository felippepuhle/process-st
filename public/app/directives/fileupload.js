angular.module('ProcessStApp.directives')
  .directive('fileupload', function($timeout, MediaService) {

    function link(scope, element, attrs) {
      scope.loading = false;
      scope.progress = 0;
      scope.error = null;
      scope.media = null

      scope.show = function(id) {
        MediaService.show(id)
          .then(function (response) {
            scope.media = response.data;

            if (scope.media.status != 'ready') {
              $timeout(function(){
                scope.show(id);
              }, 3000);
            }
          });
      };

      $timeout(function(){
        $('#' + scope.id).fileupload({
          url: 'https://upload.wistia.com',
          dataType: 'json',
          formData: {
            api_password: WistiaUtil.token
          },
          add: function (e, data) {
            var typeRegExp = new RegExp("video");
            if(!typeRegExp.test(data.files[0].type)) {
              scope.$apply(function() {
                scope.error = 'Invalid file type!';
              });
              return;
            }

            scope.$apply(function() {
              scope.loading = true;
              scope.progress = 0;
              scope.error = null;
              scope.media = null;
            });

            data.submit();
          },
          done: function (e, data) {
            if (data.result.hashed_id != '') {
              scope.show(data.result.hashed_id);
            }
          },
          error: function (response) {
            scope.$apply(function() {
              scope.error = response.responseJSON.error;
            });
          },
          progressall: function (e, data) {
            if (data.total > 0) {
              scope.$apply(function(){
                scope.progress = parseInt(data.loaded / data.total * 100, 10);
              });
            }
          }
        });
      });
    }

    return {
      restrict: 'E',
      templateUrl: 'app/directives/fileupload.html',
      replace: true,
      link: link,
      scope: {
        id: "@id"
      }
    };

  });
