const expree = require('express')
const router = expree.Router()

const employeeController = require("../controllers/employeeControllers")
const Employee = require("../models/Employee")

router.post('/add-emp',employeeController.createEmployee)
router.get('/allemployees',employeeController.getEmplorees)
router.get('/employee/:id',employeeController.singleEmployee)
router.put('/update/:id',employeeController.updateEmployee)
router.delete('/delete/:id',employeeController.deleteEmployee)

module.exports = router