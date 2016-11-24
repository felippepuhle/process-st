angular.module('ProcessStApp.services')
  .factory('WistiaService', function($http) {

    var token = '4f5f8f38f383107712c15170480bc622e9fb4a6320ed9478c5dc914694e5677c';

    var service = {};

    service.list = function() {
      return $http.get('https://api.wistia.com/v1/projects.json?api_password=' + token);
    };

    service.show = function(id) {
      return $http.get('https://api.wistia.com/v1/projects/' + id + '.json?api_password=' + token);
    }

    return service;

  });
