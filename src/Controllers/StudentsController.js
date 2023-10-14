const StudentsModel = require("../Models/StudentsModel");

exports.create = async (req, res) => {
    
    try {
        const { email, firstName, lastName, mobile, password, address, roll, class: classId } = req.body;
        const student = new StudentsModel({ email, firstName, lastName, mobile, password, address, roll, class: classId });
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        console.log(error);
    }

}