'use strict';

(function() {

  function EmployeeResource($resource) {


    var empResource = $resource('/api/employees/:id/:controller', {
      id: '@_id'
    });

    var employees = empResource.query();

    return {
      getAll:employees,
      createEmp : function(newEmp){
        new empResource(newEmp).$save().then(function(d) {
          employees.push(d);
        })
      }

    //   updateEmp : function(data){
    //   empResource.update({_id:data._id},data).$promise.then(function(editEmp) {
    //   });
    // }
  }
}

  angular.module('maerkApp')
    .factory('Employee', EmployeeResource);
})();


// var emps = EmpResource.query();
//      // spot to add delete emp later on
//
//      var createEmp = function(newEmp) {
//        new EmpResource(newEmp).$save().then(function(d) {
//          emps.push(d);
//        })
//      }
//
//      var updateEmp = function(data) {
//        // console.log(data);
//        EmpResource.update({_id:data._id},data).$promise.then(function(editEmp) {
//
//        //   emps.push(editEmp);
//        //   console.log(editEmp);
//        });
//      }
