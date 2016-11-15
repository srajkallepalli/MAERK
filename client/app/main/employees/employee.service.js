'use strict';

(function() {

  function EmployeeResource($resource) {


    var empResource = $resource('/api/employees/:id/:controller', {
      id: '@_id'
    },{
      update:{
        method:'put',
        params:{
          id:'@_id'
        }
      }
    });

    var employees = empResource.query();

    return {
      getAll:employees,
      createEmp : function(newEmp){
        new empResource(newEmp).$save().then(function(d) {
          employees.push(d);
        })
      },

      updateEmp : function(data){
      empResource.update({_id:data._id},data).$promise.then(function(editEmp) {
        //overwrite old object
        for (var i = 0; i < employees.length; i++) {
          if (employees[i]._id == editEmp._id) {
            employees[i] = editEmp;
          }
        }
      });
    }
  }
}

  angular.module('maerkApp')
    .factory('Employee', EmployeeResource);
})();


// var employees = EmpResource.query();
//      // spot to add delete emp later on
//
//      var createEmp = function(newEmp) {
//        new EmpResource(newEmp).$save().then(function(d) {
//          employees.push(d);
//        })
//      }
//
     var updateEmp = function(data) {
       console.log(data);
       EmpResource.update({_id:data._id},data).$promise.then(function(editEmp) {

         employees.push(editEmp);
         console.log(editEmp);
       });
     }
