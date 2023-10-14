const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    mobile: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String},
    roll: {type: Number, required: true},
    class: {type: Number, required: true}
},
{
    timestamps: true,
    versionKey: false
});

const StudentsModel = mongoose.model('students', Schema);
module.exports = StudentsModel;