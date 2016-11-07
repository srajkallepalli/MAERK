'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('main', {
      url: '/dashboard',
      template: '<main class="flex layout-column"></main>',
      authenticate: true
    })
      .state('main.employees', {
        url: "/employees",
        templateUrl: 'app/main/employees/employees.html',
        controller:"EmployeesController",
        controllerAs:'vm',
        authenticate: true
      })

      .state("main.skills",{
     url:"/skills",
     templateUrl:"app/main/skills/skills.html",
     controller:'skillsController',
     controllerAs:'ctrl'
   })
  });
