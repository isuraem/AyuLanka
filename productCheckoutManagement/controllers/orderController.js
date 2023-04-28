const { response } = require("express");
const OrderService = require("../services/orderService");

//controller for add Order
module.exports.createOrderController = async (req, res) => {
    try {
        let serviceResponse = await OrderService.createOrderService(req);
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
};


//controller for add Delivery ForOrder
module.exports.createDeliveryForOrderController = async (req, res) => {
    try {
        let serviceResponse = await OrderService.createDeliveryForOrderService(req);
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
};