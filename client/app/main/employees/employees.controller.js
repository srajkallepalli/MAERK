(function(){
    'use strict';

    angular.module('maerkApp')
      .controller('EmployeesController', function($scope, $mdToast){

        $scope.employeeList = [
            {
                id: 1,
                firstName: 'Brad',
                lastName: 'Pitt',
                client: 'Paramount Pictures',
                skills: 'Acting',
                recruiter: 'Angelina Jolie',
                revenue: 3200
            },
            {
                id: 2,
                firstName: 'Leonardo',
                lastName: 'Di caprio',
                client: 'Tristar',
                skills: 'Acting',
                recruiter: 'Martin Scorsese',
                revenue: 8700
            },
            {
                id: 3,
                firstName: 'Robert',
                lastName: 'De Niro',
                client: 'Time Warner',
                skills: 'Acting',
                recruiter: 'Martin Scorsese',
                revenue: 4600
            },
            {
                id: 4,
                firstName: 'Steven',
                lastName: 'Spielberg',
                client: 'Walt Disney',
                skills: 'Direction',
                recruiter: 'Al Pacino',
                revenue: 9800
            },
            {
                id: 5,
                firstName: 'Michael',
                lastName: 'Crichton',
                client: 'Sony',
                skills: 'Writing',
                recruiter: 'James Cameron',
                revenue: 4900
            },
            {
                id: 6,
                firstName: 'David',
                lastName: 'Horner',
                client: '21st Century Fox',
                skills: 'Music Direction',
                recruiter: 'James Cameron',
                revenue: '14%'
            },
            {
                id: 7,
                firstName: 'Courtney',
                lastName: 'Cox',
                client: 'MGM',
                skills: 'Acting',
                recruiter: 'David Crane',
                revenue: 2000
            },
            {
                id: 8,
                firstName: 'Jennifer',
                lastName: 'Aniston',
                client: 'MGM',
                skills: 'Acting',
                recruiter: 'David Crane',
                revenue: 8700
            },
            {
                id: 9,
                firstName: 'Matthew',
                lastName: 'Perry',
                client: 'MGM',
                skills: 'Acting',
                recruiter: 'David Crane',
                revenue: 3800
            },
            {
                id: 10,
                firstName: 'Matt',
                lastName: 'Le Blanc',
                client: 'MGM',
                skills: 'Acting',
                recruiter: 'David Crane',
                revenue: 9800
            }
        ];
    });
}());
