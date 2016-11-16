(function() {
  'use strict';
  angular
    .module('maerkApp')
    .controller('AddController', AddController)

  function AddController($scope, Employee, $mdDialog) {
    $scope.employee = {};
    $scope.add = function(newEmp) {
      Employee.createEmp(newEmp);
      $mdDialog.hide();
    }
    $scope.cancel = function() {
      $mdDialog.cancel();
    }
  }

})();
