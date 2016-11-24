angular.module('ProcessStApp.services')
  .factory('WistiaService', function($http) {

    return {
      list: function() {
        return $http.get('https://api.wistia.com/v1/projects.json?api_password=' + WistiaUtil.token);
      },
      show: function(id) {
        return $http.get('https://api.wistia.com/v1/projects/' + id + '.json?api_password=' + WistiaUtil.token);
      },
      delete: function(id) {
        return $http.delete('https://api.wistia.com/v1/projects/' + id + '.json?api_password=' + WistiaUtil.token);
      }
    };

  });
