const { response } = require("express");
const mongoose = require("mongoose");
let Seller = require("../models/seller");

//create Seller service for add Seller
module.exports.createSellerService = async (req, res) => {
    try {
        const sellerName = req.sellerName;
        const shopName = req.shopName;
        const shopAddress = req.shopAddress;
        const Email = req.Email;
        const mobileNumber = req.mobileNumber;

        const newSeller = new Seller({
            sellerName,
            shopName,
            shopAddress,
            Email,
            mobileNumber,
        });
        let reponse = await newSeller.save();

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

module.exports.getOneSellerService = async (req, res) => {
    try {
        let id = req.id;

        let response = await Seller.find({ _id: id });

        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "faild",
                data: response,
            };
        }
    } catch (err) {
        throw err;
    }
};
