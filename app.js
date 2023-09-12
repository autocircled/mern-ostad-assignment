import express from "express"

const App = express()

// Default route
App.get("/", (req, res) => {
    res.status(200).send("Welcome to MERN Assignment")
})

// 404 Route
App.get("*", (req, res) => {
    res.status(404).send("404 Not Found")
})

export default App
