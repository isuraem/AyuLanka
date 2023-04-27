const {response} = require('express');
const mongoose = require('mongoose');
let Buyer = require('../models/buyer');

// create buyer service for add buyer 
module.exports.createBuyerService = async(req,res) => {
    try{
        console.log(req)
        const BuyerName = req.BuyerName;
        const DOB = req.DOB;
        const Gender = req.Gender;
        const Email = req.Email;
        const MobileNumber = req.MobileNumber;
        const Password = req.Password;
        const Province = req.Province;
        const City = req.City;
        const Area = req.Area;
        const Address = req.Address;
        const PostalCode = req.PostalCode;

        const newBuyer = new Buyer({
            BuyerName,
            DOB,
            Gender,
            Email,
            MobileNumber,
            Password,
            Province,
            City,
            Area,
            Address,
            PostalCode
        });

        let response = await newBuyer.save();

        if(response){
            return{
                msg: 'success',
                data: response,
            };
        } else {
            msg: 'failed';
            data: response;
        }
    }catch(err){
        throw err;
    }
};

// create service for get one buyer using email
module.exports.getOneBuyerService = async(req,res) => {
    try {
        // let id = req.id;
        console.log("req>>>",req.Email);
        let Email = req.Email;
        // let Password = req.Password;
        let response = await Buyer.find({Email : Email});

        if(response){
            return{
                msg: "success",
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

// get one buyer using id
module.exports.getSingleBuyerService = async(req,res) => {
    try {
        let id = req.id;
        // let Email = req.Email;
        // let Password = req.Password;
        let response = await Buyer.find({_id: id });

        if(response){
            return{
                msg: "success",
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

// create service for get all buyers
module.exports.getBuyerService = async(req,res) => {
    try {
        let response = await Buyer.find();
        console.log(response)

        if (response) {
            return{
                msg: "success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            }
        }
    } catch (err) {
        throw err;
    }
};

// create service for update selected buyer
module.exports.updateBuyerService = async(req,res) => {
    try {
        let id = req.id;
        console.log("req>>>",req.id);
        let idString = id.toString();

        // destructure
        const {
            BuyerName,
            DOB,
            Gender,
            Email,
            MobileNumber,
            Password,
            Province,
            City,
            Area,
            Address,
            PostalCode
        } = req.body;

        const updateBuyer = {
            BuyerName,
            DOB,
            Gender,
            Email,
            MobileNumber,
            Password,
            Province,
            City,
            Area,
            Address,
            PostalCode
        };

        let response = await Buyer.findByIdAndUpdate(
            {_id: idString},
            updateBuyer
        );

        if (response) {
            return{
                msg: "success",
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

// create service for delete buyer
module.exports.deleteBuyerService = async(req,res)=>{
    try {
        let id = req.id;
        console.log("req>>>",req.id);
        let idString = id.toString();

        let response = await Buyer.findByIdAndDelete({_id: idString});

        if (response) {
            return{
                msg:"success",
                data:response,
            };
        } else {
            return{
                msg: "faild",
                data:response,
            };
        }
    } catch (err) {
        throw err;
    }
};
