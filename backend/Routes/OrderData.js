const express = require("express");
const Order = require("../schema/Orders");
const router = express.Router();

router.post("/OrderData", async (req, res) => {
  try {
    let data = Array.isArray(req.body.order_data) ? req.body.order_data : [];
    data.splice(0, 0, { Order_date: req.body.Order_date });
    console.log("body " + req.body.Order_date)
    let eId = await Order.findOne({ email: req.body.email });

    console.log(eId);

    if (eId == null) {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      });
      res.json({ success: true });
    } else {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
      res.json({ success: true });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
