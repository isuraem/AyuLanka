const { response } = require("express");
const mongoose = require("mongoose");
let Order = require("../models/order");
let Delivery = require("../models/delivery")

module.exports.createOrderService = async (req, res) => {
    console.log("reqqOrder>>", req)
    try {
        const orderID = req.orderID;
        const productID = req.productID;
        const sellerID = req.sellerID;
        const deliveryServiceID = req.deliveryServiceID;
        const paymentID = req.paymentID;
        const unitPrice = Number(req.unitPrice);
        const quantity = Number(req.quantity);
        const total = Number(req.total);
        const isOnlinePayment = req.isOnlinePayment;


        const newOrder = new Order({
            orderID,
            productID,
            sellerID,
            deliveryServiceID,
            paymentID,
            unitPrice,
            quantity,
            total,
            isOnlinePayment
        });
        let reponse = await newOrder.save();

        if (reponse) {
            return {
                msg: "success",
                data: reponse,
            };
        } else {
            msg: "failed";
            data: reponse;
        }
    } catch (err) {
        throw err;
    }
};

module.exports.createDeliveryForOrderService = async (req, res) => {

    try {
        const orderID = req.orderID;
        const street = req.street;
        const province = req.province;
        const city = req.city;
        const postalCode = req.postalCode;
        const country = req.country;
        const phone = req.phone;
        const email = req.email;


        const newDelivery = new Delivery({
            orderID,
            street,
            city,
            province,
            postalCode,
            country,
            phone,
            email

        });

        let reponse = await newDelivery.save();

        if (reponse) {
            return {
                msg: "success",
                data: reponse,
            };
        } else {
            msg: "failed";
            data: reponse;
        }

    } catch (err) {
        throw err
    }
}