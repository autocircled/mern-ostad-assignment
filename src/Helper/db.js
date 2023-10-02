const mongoose = require("mongoose");

exports.connectDB = async (url) => {
    return mongoose.connect(url);
};

// export default connectDB