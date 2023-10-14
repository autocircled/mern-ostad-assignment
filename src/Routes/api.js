const express = require("express");
const router = express.Router();

const StudentsController = require("../Controllers/StudentsController.js");
router.post("/signup", StudentsController.create);


module.exports = router