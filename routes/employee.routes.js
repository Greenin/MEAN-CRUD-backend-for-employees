const express = require('express'); //We require "express" not to create a server but to create the server routes
const router = express.Router(); //To this object we will add routes

const employee = require('../controllers/employee.controller');

router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports = router;