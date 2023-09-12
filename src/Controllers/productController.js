exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Product Created" });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "All Products Fetched" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Product Deleted" });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Product Updated" });
};