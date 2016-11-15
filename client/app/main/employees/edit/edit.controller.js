(function () {
 'use strict';
 angular
     .module('maerkApp')
     .controller('EditController', EditController)

     function EditController($scope, Employee, data, $mdToast, $mdDialog){
       $scope.employee = angular.copy(data);
       // console.log(data)
       // $scope.add = function(newEmp){
       //
       //   Employee.updateEmp(newEmp);
       //   $mdDialog.hide();
       // }

       $scope.add = function(newEmp,event) {
       $mdToast.show({
           hideDelay   : 0,
           position    : 'bottom right',
           controller  : 'ToastCtrl',
           parent: event.target,
           templateUrl : 'app/main/employees/edit/toast/toast.html'
         }).then(function(){
           Employee.updateEmp(newEmp);
           $mdDialog.hide();
           console.log('here')
         })

         .catch(function(){
           console.log("here catch");
         });
       };

       $scope.cancel = function() {
         $mdDialog.cancel();
       }
     }

})();
