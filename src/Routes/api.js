const express = require("express");
const StudentsController = require("../Controllers/StudentsController.js");
const WorksController = require("../Controllers/WorksController.js");
const AuthVerifyMiddleware = require("../Middleware/authVerifyMiddleware.js");

const router = express.Router();

// User Management
router.post("/registration", StudentsController.registration);
router.post("/login", StudentsController.login);
router.post("/profileUpdate", AuthVerifyMiddleware, StudentsController.profileUpdate);
router.get("/profileDetails", AuthVerifyMiddleware, StudentsController.profileDetails);
router.post("/resetPassword", StudentsController.resetPassword);
router.get("/verifyEmail/:email", StudentsController.verifyEmail);
router.get("/verifyOTP/:email/:otp", StudentsController.verifyOTP);

// Work Management
router.post("/createWork", AuthVerifyMiddleware, WorksController.createWork);
router.post("/updateWorkStatus/:id/", AuthVerifyMiddleware, WorksController.updateWorkStatus);
router.get("/listWorkByStatus/:status?", AuthVerifyMiddleware, WorksController.listWorkByStatus);
router.post("/deleteWork/:id", AuthVerifyMiddleware, WorksController.deleteWork);



module.exports = router