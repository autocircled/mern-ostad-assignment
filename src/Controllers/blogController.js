exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Blog Created" });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "Blog All Fetched" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Blog Deleted" });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Blog Updated" });
};