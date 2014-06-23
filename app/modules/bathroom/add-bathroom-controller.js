/* global define, require, angular */
define(function (require) {
    'use strict';

    var _ = require("lodash");

    function AddBathroomController(ApiService, AddBathroomService) {
	var addBathroomController = this;

	addBathroomController.ApiService = ApiService;
	addBathroomController.addBathroomService = AddBathroomService;
	addBathroomController.isModal = AddBathroomService.concrete.isModal;
	addBathroomController.formErrors = {};
	addBathroomController.formSuccess = undefined;
	addBathroomController.formGeneralError = undefined;
	addBathroomController.bathroom = {};
	addBathroomController.bathroom.name = "";
	addBathroomController.bathroom.gender = "";
	addBathroomController.bathroom.hasSensor = false;
    }

    AddBathroomController.prototype.setBathroomDefaults = function () {
        var self = this;
        self.bathroom = {};
        self.bathroom.name = "";
        self.bathroom.gender = "";
        self.bathroom.hasSensor = false;
    };  

    AddBathroomController.prototype.validateBathroom = function (bathroom) {
	var self = this;
	console.log("bathroom: " + bathroom);
	console.log("validateBathroom.bathroom.name: " + bathroom.name);
	console.log("validateBathroom.bathroomGender.gender: " + bathroom.gender);
	console.log("validateBathroom.bathroomHasSensor: " + bathroom.hasSensor);

	if (_.isEmpty(bathroom.name)) {
	    self.formErrors.bathroom.name = { "message": "Name is required." };
	} else {
	    self.formErrors = _.omit(self.formErrors, 'bathroom.name');	    
	}

	if (_.isEmpty(bathroom.gender)) {
	    self.formErrors.bathroom.gender = { "message": "Gender is required." };
	} else {
	    self.formErrors = _.omit(self.formErrors, 'bathroom.gender');	    
	}
    };

    AddBathroomController.prototype.clearFormError = function (errorFieldToClear) {
	var self = this;
	self.formErrors = _.omit(self.formErrors, errorFieldToClear);
    };

    AddBathroomController.prototype.saveBathroom = function (bathroom) {
	console.log("bathroom: " + bathroom);
	var self = this,
	name = bathroom.name, 
	bathroomGender = bathroom.gender, 
	bathroomHasSensor = bathroom.hasSensor;
	
	self.validateBathroom(bathroom);
	self.formSuccess = undefined;
	self.formGeneralError = undefined;

	if(_.isEmpty(self.formErrors)){
            self.bathroom = angular.copy(bathroom);
            self.ApiService.addBathroom(self.bathroom).then(function(response){
                self.formSuccess = "BOOOOOOOOOOOOOM!!!!!";
                if(response && response.data){
                    console.log("data that came back: ",response.data);
                    self.availableBathrooms.push(self.bathroom);
                    self.availableBathroomNames.push(self.bathroom.name);
                    self.setBathroomDefaults();
                    self.addBathroomService.concrete.finalize(response.data);
                }else{
                    self.formGeneralError = "BOOOOOOOOOOOOO!!!!! We got no response.";
                }
            }, function(error){
                console.log("This is the error", error);
                self.formGeneralError = "BOOOOOOOOOOOOO!!!!! You got an error: "+error;
            });
        }
    };
    
    return [ 'ApiService', 'AddBathroomService', AddBathroomController ];
});
