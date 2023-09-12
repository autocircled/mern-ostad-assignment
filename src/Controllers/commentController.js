exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Comment Created" });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "All Comments Fetched" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Comment Deleted" });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Comment Updated" });
};