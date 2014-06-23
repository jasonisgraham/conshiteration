/* global define, require, _ */
define(function (require) {
    'use strict';

    var angular = require("angular");
    var addBathroomController = require("modules/bathroom/add-bathroom-controller");
    var addBathroomService = require("modules/bathroom/add-bathroom-service");
    // var viewBathroomController = require("modules/bathroom/view-bathroom-controller");
    // var editBathroomController = require("modules/bathroom/edit-bathroom-controller");

    // Create module                                                                                                                                                                                                                                                           
    var bathroom = angular.module("bathroom", []);

    // Create controllers                                                                                                                                                                                                                                                      
    bathroom.controller('AddBathroomCtrl', addBathroomController);
    bathroom.service('AddBathroomService', addBathroomService);
    // bathroom.controller('ViewBathroomCtrl', viewBathroomController);
    // bathroom.controller('EditBathroomCtrl', editTagController);

    return bathroom;
});
