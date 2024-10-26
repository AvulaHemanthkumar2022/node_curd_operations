const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    // name, email, phone, city, pincode
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    Phone:{
        type:Number,
        require:true
    },
    City:{
        type:String,
    },
    pincode:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('Employee', employeeSchema);