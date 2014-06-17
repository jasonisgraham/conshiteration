/* global define, require */
require.config({
    baseUrl: "",
    paths: {
        "jquery": "bower_components/jquery/dist/jquery.min",
        "angular": "bower_components/angular/angular",
        "angular-route": "bower_components/angular-route/angular-route",
        "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router",
        "lodash": "bower_components/lodash/dist/lodash.min"
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        }

    },
    priority: [
        "angular"
    ]
});

define(function (require) {
    "use strict";

    var jQuery = require('jquery');
    var angular = require('angular');
    var _ = require('lodash');
    var angularBootstrap = require('angular-bootstrap');
    var uiRouter = require('angular-ui-router');
    var navigation = require('modules/navigation/navigation');
    var api = require('api/api');
    var addBathroom = require('modules/add-bathroom/add-bathroom');
    var landing = require('modules/landing/landing');
    var routerConfig = require('router-config');

    var app = angular.module("pshartFinder", [
        'ui.bootstrap',
        'ui.router',
        navigation.name,
        api.name,
        addBathroom.name,
	      landing.name])

        .config(routerConfig);

    angular.bootstrap(document.getElementsByTagName('body')[0], ['pshartFinder']);
});
