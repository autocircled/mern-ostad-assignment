const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    email: {type: String, required: true},
    otp: {type: String, required: true},
    status: {type: Number, default: 0}
},
{
    timestamps: true,
    versionKey: false
});

const OTPModel = mongoose.model('otps', Schema);
module.exports = OTPModel;