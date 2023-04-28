const { response } = require("express");
const mongoose = require("mongoose");
let Payment = require('../models/payment')

module.exports.createPaymentService = async (req, res) => {
    try {
        const orderID = req.orderID;
        const cardNo = req.cardNo;
        const amount = req.amount;
        const cardHolder = req.cardHolder;
        const date = req.date;



        const newPayment = new Payment({
            orderID,
            cardNo,
            amount,
            cardHolder,
            date,

        });
        let reponse = await newPayment.save();

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