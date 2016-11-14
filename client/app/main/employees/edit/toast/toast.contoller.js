(function () {
  'use strict';
  angular
      .module('maerkApp')
      .controller('ToastCtrl', ToastController)

      function ToastController($scope,$mdToast){
          $scope.cancel=function(){
            $mdToast.cancel();
          }
          $scope.save=function(){
            $mdToast.hide();
          }

      }

 })();
