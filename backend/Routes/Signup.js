const express = require("express")
const Routers = express.Router();
var bcrypt = require('bcryptjs');
const user = require("../schema/User")
console.log(user)
const { check, validationResult } = require('express-validator');
Routers.post("/Signup",
    [
        check('email', "email is not correct ").isEmail(),
        check("password", "password must by 5 character").isLength({ min: 5 })

    ],
    async (req, res) => {

        const error = validationResult(req)
        // console.log(error)
        // console.log(error.isEmpty())
        if (!error.isEmpty()) {
            res.status(400).json({ error: error.array() })
            return ;
        }
        console.log(error)

        const salt = await bcrypt.genSalt(10)
        const securePassword =  await bcrypt.hash(req.body.password, salt)
        // console.log(securePassword)
        try {
            const createUser = await user.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
                location: req.body.location,
            })
            // console.log("connect")
            res.json({ success: true  })
        } catch (error) {

        }
    }
)

module.exports = Routers;
