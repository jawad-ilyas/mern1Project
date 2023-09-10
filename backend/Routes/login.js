const express = require("express");
const routers = express.Router();
const bcrypt = require("bcryptjs")
const { check, validationResult } = require('express-validator');
const user = require('../schema/User.js')
const jwt = require("jsonwebtoken")
routers.post("/login",
    [
        check("email", "email is not valid").isEmail(),
        check("password", "password must be 5 character ").isLength({ min: 5 })



    ],
    async (req, res) => {

        const error = validationResult(req);
        // console.log(error)
        if (!error.isEmpty()) {
            res.status(400).json({ error: error.array() })
        }


        try {
            // console.log(req.body)
            const email = req.body.email
            // const userData = 
            const userData = await user.findOne({ email })

            if (userData === null) {
                res.status(400).json({ error: true, message: " email is not matched " })
                return;
            }



            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ error: true, message: "Password is incorrect" });
            }
            else {

                const data = {
                    user: {
                        id: userData._id
                    }
                }
                const auth = jwt.sign(data, "ladlfjldsfl", { expiresIn: "1hr" })
                res.status(200).json({ error: false, message: " data is  matched ", token: auth, email: req.body.email })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

)


module.exports = routers