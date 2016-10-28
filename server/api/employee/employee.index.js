'use strict';

var express = require('express');
var controller = require('./employee.controller');

var router = express.Router();
router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.update);
module.exports = router;
