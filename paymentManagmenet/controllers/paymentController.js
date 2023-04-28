const { response } = require("express");
const PaymentService = require("../services/paymentService");

//controller for add Order
module.exports.createPaymentController = async (req, res) => {
    try {
        let serviceResponse = await PaymentService.createPaymentService(req);
        if ((serviceResponse.msg = "success")) {
            // return serviceResponse
            return res.status(200).send({ message: "New Order is added" });

        } else {
            return res.status(300).send({ message: "Cannot add new order !" });
        }
    } catch (err) {
        return res
            .status(300)
            .send({ message: "Cannot add new order !", err: err.message });
    }
}