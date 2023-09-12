const express = require("express")

const App = new express()

// Default route
App.get("/", (req, res) => {
    res.status(200).send("Welcome to MERN Assignment")
})

// 404 Route
App.get("*", (req, res) => {
    res.status(404).send("404 Not Found")
})

module.exports = App
