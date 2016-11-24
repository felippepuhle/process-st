angular.module('ProcessStApp.services')
  .factory('MediaService', function($http) {

    return {
      show: function(id) {
        return $http.get('https://api.wistia.com/v1/medias/' + id + '.json?api_password=' + WistiaUtil.token);
      }
    };

  });
