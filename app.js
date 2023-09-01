import express from "express"

const app = express()

// Set cookies
app.get("/", (req, res) => {
    res.cookie("username", "JohnDoe", { maxAge: 1000 * 60 * 60 * 24 })
    res.cookie("language", "en", { maxAge: 1000 * 60 * 60 * 24 })
    res.status(200).send("Custom cookie {username, language} has been set")
})

// Clear cookies
app.get("/clearcookies", (req, res) => {
    res.clearCookie("username")
    res.clearCookie("language")
    res.status(200).send("Custom cookie {username, language} has been cleared")
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})