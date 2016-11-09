'use strict';

(function() {

  class MainController {

    constructor($http,$mdSidenav) {
      this.$http = $http;
      this.awesomeThings = [];
    }

  
  }

  angular.module('maerkApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
