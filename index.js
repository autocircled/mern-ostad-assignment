import App from "./app.js";

// .env file config
import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

const port = process.env.RUNNING_PORT

App.listen(port, () => {
    console.log(`Server started on port ${port}`)
})


