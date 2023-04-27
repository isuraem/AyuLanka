const {response} = require('express');
const mongoose = require ('mongoose');
let Feedback = require("../models/feedback");

// create service for add feedback
module.exports.createFeedbackService = async(req,res) =>{
    try {
        console.log(req)

        const FeedbackType = req.FeedbackType;
        const Category = req.Category;
        const Name = req.Name;
        const Address = req.Address;
        const Email = req.Email;
        const MobileNumber = req.MobileNumber;
        const Message = req.Message;

        const newFeedback = new Feedback({
            FeedbackType,
            Category,
            Name,
            Address,
            Email,
            MobileNumber,
            Message
        });

        let response = await newFeedback.save();

        if(response){
            return{
                msg: 'success',
                data: response,
            };
        } else {
            msg: 'failed';
            data: response;
        }

    } catch (err) {
        throw err;
    }
};

// create service for get all feedbacks
module.exports.getFeedbackService = async(req,res) =>{
    try {
        let response = await Feedback.find();
        console.log(response);

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
}