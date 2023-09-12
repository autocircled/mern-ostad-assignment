const express = require("express")

const app = new express()

// .env file config
require('dotenv').config({ path: 'config.env' })



app.use(express.json())

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
