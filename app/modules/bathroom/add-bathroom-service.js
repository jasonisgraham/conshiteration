/* global define, require, angular, _ */
define(function (require) {
  'use strict';

  var addBathroomServiceDefaults = {
    isModal: false,
    finalize: function(){}
  };

  function AddBathroomService() {
    var addBathroomService = this;

    addBathroomService.isModal = false;
    this.concrete = addBathroomServiceDefaults;
  }

  AddBathroomService.prototype.resetToDefaults = function(){
    this.concrete = addBathroomServiceDefaults;
  };

  return [ AddBathroomService ];
});