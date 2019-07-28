const mongoose = require('mongoose'); //We use the module "mongoose" not to connect to database but to define data schemas
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true},
    office: { type: String, required: true},
    salary: { type: Number, required: true}
});

module.exports = mongoose.model('Employee', EmployeeSchema);