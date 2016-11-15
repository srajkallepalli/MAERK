'use strict';

import mongoose from 'mongoose';

var employeeSchema = new mongoose.Schema({
   first_name: {
   type : String,
   required: true
 },

   last_name: {
   type : String,
   required: true
 },

   client: {
   type : String,
   required: true
 },

   skills: {
   type : String,
   required: true
 },
   recruiter: {
   type : String,
   required: true
 },

   placement_type: {
   type : String,
   required: true
 },

   salary: {
   type : Number,
   required: true
 },

   insurance: {
   type : Number,
   required: true
 },

   relocation: {
   type : Number,
   required: true
 },

   immigration: {
   type : Number,
   required: true
 },

   pay_vacation_cost: {
   type : Number,
   required: true
 },

   ksquare_hourly_cost: {
   type : Number,
   required: true
 },

   target_bill_rate: {
   type : Number,
   required: true
 },

   client_bill_pay: {
   type : Number,
   required: true
 },
    status:{
      type:Boolean,
      default:true
    }

});

export default mongoose.model('Employee', employeeSchema);
