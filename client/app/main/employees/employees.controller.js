(function() {
  'use strict';



  angular.module('maerkApp')
    .controller('EmployeesController', function($scope, $mdToast, $mdDialog) {
      $scope.employeeList = [{
        id: 1,
        firstName: 'Brad',
        lastName: 'Pitt',
        client: 'Paramount Pictures',
        skills: 'Acting',
        recruiter: 'Angelina Jolie',
        revenue: 3200
      }, {
        id: 2,
        firstName: 'Leonardo',
        lastName: 'Di caprio',
        client: 'Tristar',
        skills: 'Acting',
        recruiter: 'Martin Scorsese',
        revenue: 8700
      }, {
        id: 3,
        firstName: 'Robert',
        lastName: 'De Niro',
        client: 'Time Warner',
        skills: 'Acting',
        recruiter: 'Martin Scorsese',
        revenue: 4600
      }, {
        id: 4,
        firstName: 'Steven',
        lastName: 'Spielberg',
        client: 'Walt Disney',
        skills: 'Direction',
        recruiter: 'Al Pacino',
        revenue: 9800
      }, {
        id: 5,
        firstName: 'Michael',
        lastName: 'Crichton',
        client: 'Sony',
        skills: 'Writing',
        recruiter: 'James Cameron',
        revenue: 4900
      }, {
        id: 6,
        firstName: 'David',
        lastName: 'Horner',
        client: '21st Century Fox',
        skills: 'Music Direction',
        recruiter: 'James Cameron',
        revenue: '14%'
      }, {
        id: 7,
        firstName: 'Courtney',
        lastName: 'Cox',
        client: 'MGM',
        skills: 'Acting',
        recruiter: 'David Crane',
        revenue: 2000
      }, {
        id: 8,
        firstName: 'Jennifer',
        lastName: 'Aniston',
        client: 'MGM',
        skills: 'Acting',
        recruiter: 'David Crane',
        revenue: 8700
      }, {
        id: 9,
        firstName: 'Matthew',
        lastName: 'Perry',
        client: 'MGM',
        skills: 'Acting',
        recruiter: 'David Crane',
        revenue: 3800
      }, {
        id: 10,
        firstName: 'Matt',
        lastName: 'Le Blanc',
        client: 'MGM',
        skills: 'Acting',
        recruiter: 'David Crane',
        revenue: 9800
      }];

      $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: 'AddController',
            templateUrl: 'app/main/employees/add/emp.dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
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
          $scope.status = 'You decided to de activate the employee.';
        }, function() {
          $scope.status = 'You decided to keep the employee.';
        })
      }

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

      // $scope.deleteRowCallback = function(rows){
      //       $mdToast.show(
      //           $mdToast.simple()
      //               .content('Deleted row id(s): '+rows)
      //               .hideDelay(3000)
      //       );
      //   };

      $scope.showEdit = false;
      $scope.showOptions = false;

      $scope.selectedRowCallback = function(rows) {

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


    });


})();
