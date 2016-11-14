(function() {
  'use strict';



  angular.module('maerkApp')
    .controller('EmployeesController', function($scope, $mdToast, $mdDialog, Employee) {
//

      $scope.employeeList = Employee.getAll;

      $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: 'AddController',
            templateUrl: 'app/main/employees/add/emp.dialog.html',
            locals: {
              data: null
            },
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          })
      }

      $scope.showConfirm = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to de activate the employee?')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
          $scope.deactivate()
          $scope.status = 'You decided to de activate the employee.';
        }, function() {
          $scope.status = 'You decided to keep the employee.';
        })
      }

      $scope.showConfirmAct = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to activate the employee?')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
          $scope.activate()
          $scope.status = 'You decided to activate the employee.';
        }, function() {
          $scope.status = 'You decided to cancel.';
        })
      }

      $scope.showEdits = function(ev) {

       var arrayObjectOf = function(myArray, searchTerm) {
         for (var i = 0, len = myArray.length; i < len; i++) {
           if (myArray[i]._id === searchTerm) return myArray[i];
         }
         return -1;
       }
       var selected = arrayObjectOf($scope.employeeList, $scope.selected[0]);
       console.log($scope.employeeList);
       $mdDialog.show({
           controller: 'EditController',
           controllerAs: 'employee',
           locals: {
             data: selected
           },
           templateUrl: 'app/main/employees/add/emp.dialog.html',
           parent: angular.element(document.body),
           targetEvent: ev,
           clickOutsideToClose: true,
           fullscreen: $scope.customFullscreen
           // resolve: {
           //   data: function() {
           //     return selected;
           //   }
           // }
         })
         .then(function(answer) {
           $scope.status = 'You said the information was "' + answer + '".';
         }, function() {
           $scope.status = 'You cancelled the dialog.';
         })
     };

      $scope.showDelete = function(ev) {
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete the employee?')
          .textContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
          $scope.status = 'You decided to delete the employee.';
        }, function() {
          $scope.status = 'You decided to keep the employee.';
        })
      }

      $scope.showConfirmEdit = function(ev) {
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to save the employee?')
          .textContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('Cancel');

          $mdDialog.show(confirm).then(function() {
            $scope.status = 'You decided to save the employee.';
          }, function() {
            $scope.status = 'You decided to cancel.';
          })
        }

      // $scope.deleteRowCallback = function(rows){
      //       $mdToast.show(
      //           $mdToast.simple()
      //               .content('Deleted row id(s): '+rows)
      //               .hideDelay(3000)
      //       );
      //   };

      $scope.showEdit = false;
      $scope.selected = [];
      $scope.showOptions = false;

      $scope.selectedRowCallback = function(rows) {
        $scope.selected = rows;

        if (rows == 0) {
          $scope.showEdit = false;
          $scope.showOptions = false;
          console.log("0 rows selected");
        } else if (rows.length == 1) {
          $scope.showEdit = true;
          $scope.showOptions = true;
          console.log("1 row selected");
        } else {
          $scope.showEdit = false;
          $scope.showOptions = true;
          console.log('nothing selected')
          console.log(rows);
        }
      }

        $scope.activate = function() {
          for (var i = 0; i < $scope.selected.length ; i ++) {
            for (var j = 0; j < $scope.employeeList.length; j ++) {
              if ($scope.selected[i] == $scope.employeeList[j]._id) {
                console.log($scope.employeeList[j])
                $scope.employeeList[j].status = true;
                Employee.updateEmp($scope.employeeList[j]);
                console.log("hi")
              }
            }
          }
        }

        $scope.deactivate = function() {
          for (var i = 0; i < $scope.selected.length; i ++) {
            for (var j = 0; j < $scope.employeeList.length; j ++) {
              if ($scope.selected[i] == $scope.employeeList[j]._id) {
                $scope.employeeList[i].status = false;
                Employee.updateEmp($scope.employeeList[j]);
              }
            }
          }
        }
    });


})();
