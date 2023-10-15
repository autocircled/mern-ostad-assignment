const StudentsModel = require("../Models/StudentsModel");
const jwt = require("jsonwebtoken");
const OTPModel = require("../Models/OTPModel");
const SendEmailUtility = require("../Helper/SendEmailer");

exports.registration = async (req, res) => {
    const reqBody = req.body;
    try {

        const student = await StudentsModel.create(reqBody);
        res.status(200).json({status: "success", data: student});
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }

}

exports.login = async (req, res) => {
    try {
        const reqBody = req.body;
        const students = await StudentsModel.find(reqBody).count();
        if ( students === 1 ) {
            // Create Token
            const Payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data: reqBody['email']
            }
            const token = jwt.sign(Payload, "mysecrettoken");

            res.status(200).json({status: "success", data: token});
        } else {
            res.status(200).json({status: "failed", data: "No User Found"});
        }
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
        
    }
}

exports.profileUpdate = async (req, res) => {
    try {
        const reqBody = req.body;
        const student = await StudentsModel.findOneAndUpdate({ email: req.headers.email }, reqBody);
        res.status(200).json({status: "success", data: student});
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }
}

exports.profileDetails = async (req, res) => {
    try {
        const email = req.headers.email;
        const student = await StudentsModel.findOne({ email });
        res.status(200).json({status: "success", data: student});

    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }
}

exports.verifyEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const otp = Math.floor(100000 + Math.random() * 900000);
        const text = `Your OTP is ${otp}`;
        const subject = "Verification OTP";
        
        const student = await StudentsModel.findOne({ email }).count();
        if( student === 1 ) {
            // Verification email need to send
            // await SendEmailUtility(email, subject, text);
            await OTPModel.create({ email: email, otp: otp });
        } else {
            res.status(200).json({status: "failed", data: "No User Found"});
        }
    } catch (error) {
        res.status(401).json({status: "failed", data: error});
    }
}
exports.verifyOTP = async (req, res) => {
    try {
        const email = req.params.email;
        const otp = req.params.otp;
        const status = 0;
        const statusUpdate = 1

        const result = await OTPModel.findOne({ email, otp, status }).count();
        if( result === 1 ) {
            const student = await OTPModel.findOneAndUpdate({ email }, { status: statusUpdate });
            res.status(200).json({status: "success", data: student});
        } else {
            res.status(200).json({status: "failed", data: "Invalid OTP"});
        }
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const otp = req.body.otp;
        const assumedStatus = 1;
        const result = await OTPModel.findOne({ email, otp, status: assumedStatus }).count();
        if( result === 1 ) {
            const student = await StudentsModel.findOneAndUpdate({ email }, { password });
            res.status(200).json({status: "success", data: student});
        } else {
            res.status(200).json({status: "failed", data: "Invalid OTP"});
        }

    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }
}