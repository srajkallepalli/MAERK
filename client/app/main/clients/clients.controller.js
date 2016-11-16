(function () {
  'use strict';
  angular
      .module('maerkApp')
      .controller('clientsController', clientsController)


  function clientsController ($scope, $log) {
    this.year = '';
    this.years = ['2016','2015','2014'];

    $scope.filteredItems = [
              {
                  skills: 'Business Analyst',
                  NoEmployees: '2',
                  revenue: 10000
              },

              {
                  skills: 'UI Developer',
                  NoEmployees: '8',
                  revenue: 20000
              },

              {
                  skills: 'Salesforce Admin',
                  NoEmployees: '6',
                  revenue: 80000
              },

              {
                  skills: 'Business Analyst',
                  NoEmployees: '2',
                  revenue: 10000
              },

              {
                  skills: 'UX Developer',
                  NoEmployees: '4',
                  revenue: 40000
              },

              {
                  skills: 'Business Analyst',
                  NoEmployees: '2',
                  revenue: 10000
              },

              {
                  skills: 'Business Analyst',
                  NoEmployees: '2',
                  revenue: 10000
              },

              {
                  skills: 'Business Analyst',
                  NoEmployees: '2',
                  revenue: 10000
              },

              {
                  skills: 'Business Analyst',
                  NoEmployees: '2',
                  revenue: 10000
              },

              {
                  skills: 'Business Analyst',
                  NoEmployees: '2',
                  revenue: 10000
              },

            ];
            var reports =
   {
     'January':[{

       skills: 'Tarun',
       NoEmployees: '5',
       revenue: 12000
     }, {

       skills: 'Shrusti',
       NoEmployees: '4',
       revenue: 2000

     }, {
       skills: 'Raju',
       NoEmployees: '7',
       revenue: 4000
     }, {

       skills: 'Lekha',
       NoEmployees: '8',
       revenue: 10000
     }, {

       skills: 'Ashwini',
       NoEmployees: '2',
       revenue: 22000
     }, {

       skills: 'Harsha',
       NoEmployees: '1',
       revenue: 1200
     }, {

       skills: 'Vinni',
       NoEmployees: '8',
       revenue: 4200
     }, {

       skills: 'Anusha',
       NoEmployees: '8',
       revenue: 6000
     }, {

       skills: 'Gnandeep',
       NoEmployees: '9',
       revenue: 2000
     }, {

       skills: 'Nitin',
       NoEmployees: '2',
       revenue: 3200
     } ],
     'February':[{

       skills: 'Donald',
       NoEmployees: '4',
       revenue: 4800
     }, {

       skills: 'Hilary',
       NoEmployees: '4',
       revenue: 5400

     }, {
       skills: 'Ahwldkh',
       NoEmployees: '8',
       revenue: 8200
     }, {

       skills: 'ldkhcdl',
       NoEmployees: '3',
       revenue: 9000
     }, {

       skills: 'Ashwini',
       NoEmployees: '6',
       revenue: 3800
     }, {

       skills: 'choecgoc',
       NoEmployees: '12',
       revenue: 8800
     }, {

       skills: 'Vinni',
       NoEmployees: '21',
       revenue: 2000
     }, {

       skills: 'Anusha',
       NoEmployees: '22',
       revenue: 4400
     }, {

       skills: 'Gnandeep',
       NoEmployees: '16',
       revenue: 7100
     }, {

       skills: 'Nitin',
       NoEmployees: '14',
       revenue: 2200
     }, ],
     'March':[{

       skills: 'Donaldmarch',
       NoEmployees: '6',
       revenue: 8100
     }, {

       skills: 'Hilarymarch',
       NoEmployees: '4',
       revenue: 9000

     }, {
       skills: 'Ahwldkhmarch',
       NoEmployees: '11',
       revenue: 4000
     }, {

       skills: 'ldkhcdl',
       NoEmployees: '10',
       revenue: 2000
     }, {

       skills: 'Ashwini',
       NoEmployees: '18',
       revenue: 1000
     }, {

       skills: 'choecgoc',
       NoEmployees: '28',
       revenue: 12000
     }, {

       skills: 'Vinni',
       NoEmployees: '4',
       revenue: 3000
     }, {

       skills: 'Anusha',
       NoEmployees: '6',
       revenue: 2000
     }, {

       skills: 'Gnandeep',
       NoEmployees: '11',
       revenue: 2000
     }, {

       skills: 'Nitin',
       NoEmployees: '20',
       revenue: 1000
     }, ]

   }
   this.updateMonth = function(month) {
     $scope.filteredItems = reports[month]
   };
  }
})();
