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

   .state("main.clients",{
  url:"/clients",
  templateUrl:"app/main/clients/clients.html",
  controller:'clientsController',
  controllerAs:'ctrl'
})

  });
