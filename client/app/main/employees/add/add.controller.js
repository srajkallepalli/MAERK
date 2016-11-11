(function () {
  'use strict';
  angular
      .module('maerkApp')
      .controller('AddController', AddController)

      function AddController($scope, Employee, data, $mdDialog){
        $scope.employee = angular.copy(data);
        // console.log(data)
        $scope.add = function(newEmp){
          // console.log('hi')
          if(data){
            Employee.updateEmp(newEmp);
          }else{
            Employee.createEmp(newEmp);
          }
          $mdDialog.hide();
        }
        $scope.cancel = function() {
          $mdDialog.cancel();
        }
      }

 })();
