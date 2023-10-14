const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    otp: {type: String, required: true},
    status: {type: String, required: true}
},
{
    timestamps: true,
    versionKey: false
});

const OTPModel = mongoose.model('otp', Schema);
module.exports = OTPModel;