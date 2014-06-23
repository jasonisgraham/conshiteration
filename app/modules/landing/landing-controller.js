/* global define, require, angular, _ */
define(function() {
  'use strict';

  function LandingController() {
    var landingController = this;
    landingController.test = 'tesntStuff';
  }

  return [ 'ApiService', LandingController ];
});
