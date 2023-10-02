const app = require("./app");
// db and authenticate users
const db = require("./src/Helper/db.js");

const port = process.env.RUNNING_PORT || 8080;

const start = async () => {
    try {
        await db.connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
            console.log(`Database connected at ${process.env.MONGO_URI}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();

