const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit')
const helmet = require('helmet')
const hpp = require('hpp');
// const multer = require('multer');
// const jwt = require('jsonwebtoken');
// const mysql = require('mysql');
// const mongoose = require('mongoose');
// const validator = require('validator');


const app = new express()

// .env file config
require('dotenv').config({ path: 'config.env' })


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());

// Rate limit
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 1000
})
app.use('/api/v1', apiLimiter)

// Routes
const routes = require("./src/Routes/api")
app.use('/api/v1', routes)

// Default route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to MERN Assignment")
})

// 404 Route
app.get("*", (req, res) => {
    res.status(404).send("404 Not Found")
})

module.exports = app
