/* global define */
define(function (require) {
    'use strict';

    function ApiService($q, $http) {

        var apiService = this;

        apiService.apiResults = {};

        apiService.formatResponse = function (rawResponse) {
            var parsed = JSON.parse(rawResponse);
            return parsed.data;
        };

        apiService.addBathroom = function (bathroom) {
            var deferred = $q.defer();
            console.log("bathroom to add:", bathroom);
            deferred.resolve("Bathroom added");
            return deferred.promise;
        };

        apiService.getBathroomResults = function() {
          console.log("getting bathroom results");
        };
    }

    return [
        '$q',
        '$http',
        ApiService
    ];

});
