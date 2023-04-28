const router = require("express").Router();
const PaymentController = require("../controllers/paymentController");


//route for add payment
router.route("/add").post((req, res) => {
    const response = PaymentController.createPaymentController(req.body, res);
});



module.exports = router;