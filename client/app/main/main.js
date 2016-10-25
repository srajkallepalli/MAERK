'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/dashboard',
      template: '<main class="flex layout-column"></main>'
    });
  });
