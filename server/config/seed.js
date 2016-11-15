/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Employee from '../api/employee/employee.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

  Employee.find({}).remove()
    .then(() => {
      Employee.create({
     "first_name": "Cameron",
     "last_name": "Diaz",
     "client": [
       "Amazon",
       "Verizon",
       "NTTData"
     ],
     "skills": [
       "JS Developer",
       "Business Analyst"
     ],
     "recruiter": "Rocky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": true
   }, {
     "first_name": "Jim",
     "last_name": "Carrey",
     "client": [
       "Verizon",
       "Salesforce",
       "Google"
     ],
     "skills": [
       "Salesforce Developer",
       "UI Designer"
     ],
     "recruiter": "Nadia",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Al",
     "last_name": "Pacino",
     "client": [
       "Amazon",
       "Yahoo",
       "Twitter"
     ],
     "skills": [
       "UX Developer",
       "Automation tester"
     ],
     "recruiter": "Jasmine",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Anthony",
     "last_name": "Hopkins",
     "client": [
       "Skynoodle",
       "Shufflester",
       "Yodo"
     ],
     "skills": [
       "JavaSE",
       "Knowledge Sharing"
     ],
     "recruiter": "Ricky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Samuel",
     "last_name": "Jackson",
     "client": [
       "Skynoodle",
       "Shufflester",
       "Yodo"
     ],
     "skills": [
       "JavaSE",
       "Knowledge Sharing"
     ],
     "recruiter": "Ricky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Denzel",
     "last_name": "Washington",
     "client": [
       "Skynoodle",
       "Shufflester",
       "Yodo"
     ],
     "skills": [
       "JavaSE",
       "Knowledge Sharing"
     ],
     "recruiter": "Ricky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Charlize",
     "last_name": "Theron",
     "client": [
       "Skynoodle",
       "Shufflester",
       "Yodo"
     ],
     "skills": [
       "JavaSE",
       "Knowledge Sharing"
     ],
     "recruiter": "Ricky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Ben",
     "last_name": "Affleck",
     "client": [
       "Skynoodle",
       "Shufflester",
       "Yodo"
     ],
     "skills": [
       "JavaSE",
       "Knowledge Sharing"
     ],
     "recruiter": "Ricky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Mark",
     "last_name": "Wahlberg",
     "client": [
       "Skynoodle",
       "Shufflester",
       "Yodo"
     ],
     "skills": [
       "JavaSE",
       "Knowledge Sharing"
     ],
     "recruiter": "Ricky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   }, {
     "first_name": "Matt",
     "last_name": "Damon",
     "client": [
       "Skynoodle",
       "Shufflester",
       "Yodo"
     ],
     "skills": [
       "JavaSE",
       "Knowledge Sharing"
     ],
     "recruiter": "Ricky",
     "placement_type": "full-time",
     "salary": 71558,
     "insurance": 288,
     "relocation": 4861,
     "immigration": 7782,
     "pay_vacation_cost": 8737,
     "ksquare_hourly_cost": 50,
     "target_bill_rate": 89969,
     "client_bill_pay": 106938,
     "status": false
   })
      .then(() => {
        console.log('finished populating employee');
      });
    });
