(function () {
  'use strict';
  angular
      .module('maerkApp')
      .controller('AddController', AddController)

      function AddController($scope, Employee, $mdDialog){
        $scope.add = function(newEmp){
          //console.log('hi')
          Employee.createEmp(newEmp);
          $mdDialog.hide();
        }
        $scope.cancel = function() {
          $mdDialog.cancel();
        }
      }

 })();
