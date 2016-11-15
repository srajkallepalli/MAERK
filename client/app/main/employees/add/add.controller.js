(function () {
  'use strict';
  angular
      .module('maerkApp')
      .controller('AddController', AddController)

      function AddController($scope, Employee, $mdDialog){
        $scope.employee = {};
        // console.log(data)
        $scope.add = function(newEmp){
          // console.log('hi')
          // if(data){
          //   Employee.updateEmp(newEmp);
          // }else{
            Employee.createEmp(newEmp);
          // }
          $mdDialog.hide();
        }
        $scope.cancel = function() {
          $mdDialog.cancel();
        }
      }

 })();
