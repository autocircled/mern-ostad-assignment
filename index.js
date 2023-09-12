const App = require("./app");

// .env file config
require('dotenv').config({ path: 'config.env' })

const port = process.env.RUNNING_PORT

App.listen(port, () => {
    console.log(`Server started on port ${port}`)
})


