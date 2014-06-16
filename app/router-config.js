define([], function () {

    'use strict';

    return function ($stateProvider, $urlRouterProvider) {

        // If none of the above states are matched, use this as the fallback
        $urlRouterProvider
            .when("/home", "/landing")
            .otherwise('/landing');
    };
});
