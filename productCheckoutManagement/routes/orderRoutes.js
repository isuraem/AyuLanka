const router = require("express").Router();
const OrderController = require("../controllers/orderController");


//route for add Order
router.route("/addOrder").post((req, res) => {
    const response = OrderController.createOrderController(req.body, res);
});

//route for add Delivery for the order
router.route("/addDelivery").post((req, res) => {
    const response = OrderController.createDeliveryForOrderController(req.body, res);
});



module.exports = router;