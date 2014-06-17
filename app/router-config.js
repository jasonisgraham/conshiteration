define([], function () {
  'use strict';
  console.log("router-config");

  return function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('add-bathroom', {
        url: "/add-bathroom",
        templateUrl: "modules/add-bathroom/add-bathroom.html",
        resolve: {
          data: function (ApiService) {
            console.log("add-bathroom");
            return ApiService.getBathroomResults();
          }
        }
      });
  };
});
