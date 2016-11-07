'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'validation.match', 'ngMaterial','mdDataTable'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/login');

    $locationProvider.html5Mode(true);


  });
