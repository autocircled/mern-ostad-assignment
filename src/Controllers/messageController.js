exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Message Created" });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "All Messages Fetched" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Message Deleted" });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Message Updated" });
};