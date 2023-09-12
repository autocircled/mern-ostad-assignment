const app = require("./app");

const port = process.env.RUNNING_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})


