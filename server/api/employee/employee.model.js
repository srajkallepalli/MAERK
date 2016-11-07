'use strict';

import mongoose from 'mongoose';

var employeeSchema = new mongoose.Schema({
   first_name: {
   type : String,
   require: true;
   };
   last_name: {
   type : String,
   require: true;
   };
   client: {
   type : String,
   require: true;
   };
   skills: {
   type : String,
   require: true;
   };
   recruiter: {
   type : String,
   require: true;
   };
   placement_type: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };first_name: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };
   first_name: {
   type : String,
   require: true;
   };

});

export default mongoose.model('employee', employeeSchema);
