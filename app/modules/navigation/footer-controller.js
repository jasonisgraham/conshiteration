/* global define, require */
define(function() {
  'use strict';

  function FooterController() {
    var footerCtrl = this;
    footerCtrl.currentYear = new Date().getFullYear();
  }

  return [FooterController];
});
