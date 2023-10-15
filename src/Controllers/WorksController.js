const WorksModel = require("../Models/WorksModel");

exports.createWork = async (req, res) => {
    try {
        const reqBody = req.body;
        reqBody.email = req.headers.email;
        const work = await WorksModel.create(reqBody);
        res.status(200).json({status: "success", data: work});
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }
}

exports.updateWorkStatus = async (req, res) => {
    try {
        const reqBody = req.body;
        reqBody.email = req.headers.email;
        const work = await WorksModel.findOneAndUpdate({ _id: req.params.id }, reqBody);
        res.status(200).json({status: "success", data: work});
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }
}

exports.listWorkByStatus = async (req, res) => {
    try {
        const reqBody = req.body;
        reqBody.email = req.headers.email;
        const obj = {
            email: reqBody.email
        }
        if (req.params.status){
            obj.status = req.params.status;
        }
        const work = await WorksModel.find(obj);
        if ( work.length > 0 ) {
            res.status(200).json({status: "success", data: work});
        } else {
            res.status(200).json({status: "failed", data: "No Work Found"});
        }
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
    }
}


exports.deleteWork = async (req, res) => {
    try {
        const reqBody = req.body;
        reqBody.email = req.headers.email;
        const work = await WorksModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({status: "success", data: work});
    } catch (error) {
        res.status(200).json({status: "failed", data: error});
        
    }
}