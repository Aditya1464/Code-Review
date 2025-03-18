const aiServices = require('../services/ai.services');

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {     
        return res.status(400).json({ message: "Promt is required" });
    }

    const response = await aiServices(code);
    res.send(response);
}