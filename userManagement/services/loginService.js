const {response} = require('express');
const mongoose = require('mongoose');
let Buyer = require('../models/buyer');

// create service for login
module.exports.buyerLoginService = async(req,res)=>{
    try {
        let email = req.Email;
        let password = req.Password;
        console.log(password,email)
        let response = await Buyer.find({Email: email,Password:password});
        console.log(response)

        if (response) {
            return{
                msg:"success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            };
        }
    } catch (err) {
        throw err;
    }
};