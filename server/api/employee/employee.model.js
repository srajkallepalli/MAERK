'use strict';

import mongoose from 'mongoose';

var employeeSchema = new mongoose.Schema({
   first_name: {
   type : String,
   require: true
 },

   last_name: {
   type : String,
   require: true
 },

   client: {
   type : String,
   require: true
 },

   skills: {
   type : String,
   require: true
 },
   recruiter: {
   type : String,
   require: true
 },

   placement_type: {
   type : String,
   require: true
 },

   salary: {
   type : String,
   require: true
 },

   insurance: {
   type : String,
   require: true
 },

   relocation: {
   type : String,
   require: true
 },

   immigration: {
   type : String,
   require: true
 },

   pay_vacation_cost: {
   type : String,
   require: true
 },

   ksquare_hourly_cost: {
   type : String,
   require: true
 },

   target_bill_rate: {
   type : String,
   require: true
 },

   client_bill_pay: {
   type : String,
   require: true
 },

});

export default mongoose.model('Employee', employeeSchema);
