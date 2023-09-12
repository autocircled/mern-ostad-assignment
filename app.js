import express from "express"

const App = express()

// Set cookies
App.get("/", (req, res) => {
    res.status(200).send("Welcome to MERN Assignment")
})

export default App
