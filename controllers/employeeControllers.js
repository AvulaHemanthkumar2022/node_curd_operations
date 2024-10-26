const Employee = require('../models/Employee');

const createEmployee = async (req, res) => {
    try {
        const { Name, email, Phone, City, pincode } = req.body;

        // Create a new employee instance
        const employee = new Employee({
            Name,
            email,
            Phone,
            City,
            pincode
        });

        // Save the employee instance
        await employee.save();

        // Send the response back
        res.status(201).json(employee);
    } catch (error) {
        console.log("There is an error:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getEmplorees = async(req,res)=>{
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }catch(error){
        console.log("this is an error:",error);
        res.status(500).json({message:"server error"});
    }

};

const singleEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await Employee.findById(employeeId);

       
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.log("This is an error", error);
        res.status(500).json({ message: "Server error" });
    }
};

const updateEmployee = async (req,res)=>{
    try{
        const { Name, email, Phone, City, pincode } = req.body;

        const myemployee = await Employee.findByIdAndUpdate(req.params.id, {Name, email, Phone, City, pincode});
        if(!myemployee){
            return res.status(404).json({messege: "Employee not found"});
        }
        res.status(200).json(myemployee);

    }catch(error){
        console.log("This is an Error",error);
        res.status(500).json({messege:"server Error"});
    }
};

const deleteEmployee = async(req,res)=>{
    try{
        const employeeId = req.params.id;

        const employee = await Employee.findByIdAndDelete(employeeId);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({message:"Employee Deleted"});

    }catch(error){
        console.log("This is an Error",error);
        res.status(500).json({messege:"server Error"});
    }
}

module.exports = { createEmployee , getEmplorees, singleEmployee,updateEmployee ,deleteEmployee};
