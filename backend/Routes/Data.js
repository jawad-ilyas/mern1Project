const express = require("express")
const routes = express.Router();

routes.post("/data", (req, res) => {
    try {
        // console.log(global.foodCategoryData)
        // console.log(global.food_itemsData)
        res.send([global.foodCategoryData, global.food_itemsData])
    } catch (error) {
        console.log(error)
        res.send(error)
    }

})

module.exports = routes