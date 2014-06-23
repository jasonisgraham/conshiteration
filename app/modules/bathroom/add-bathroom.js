 /* global define, require */
define(function (require) {
  'use strict';

  var angular = require("angular");
  var addBathroomController = require("modules/bathroom/add-bathroom-controller");
  var addBathroomService = require("modules/bathroom/add-bathroom-service");

  var addBathroom = angular.module("addBathroom", []);
  addBathroom.controller('AddBathroomCtrl', addBathroomController);
  addBathroom.service('AddBathroomService', addBathroomService);

  return addBathroom;
});
