const express = require("express");
const { check, validationResult } = require('express-validator');
const order = require("../schema/Orders");
const routes = express.Router();

routes.post("/OrderReview", [
    check("email", "Email is not valid").isEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const email = req.body.email;
        const userData = await order.findOne({ email });

        if (userData === null) {
            return res.status(400).json({ success: false, message: "No data found" });
        }

        // Handle the case when data is found
        return res.status(200).json({ success: true, userData :userData });
    } catch (error) {
        // Handle any other errors that might occur
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = routes;
