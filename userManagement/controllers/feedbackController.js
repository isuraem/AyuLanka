const {response} = require('express');
const feedbackService = require("../services/feebackService");

// controller for add feedback
module.exports.createFeedbackeController = async(req,res) =>{
    console.log("feedback controller");

    try {
        console.log("feedbackContraller>>>>>>");

        let serviceResponse = await feedbackService.createFeedbackService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            console.log("New Feddback Added");
            return res.status(200).send({message: "New Feedback Added...!"});
        } else{
            console.log("Cannot Add New Feedback");
            return res.status(300).send({message: "Cannot Add New Feedback...!"});
        }
    } catch (err) {
        console.log("feedback contraller catch",err);
        return res.status(300).send({message: "Cannot Add new Feedback...!", err: err.message});
    }
};


// contraller for get all feedbacks
module.exports.getFeedbackController = async(req,res)=>{
    try {
        let serviceResponse = await feedbackService.getFeedbackService(req);

        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "All feedbacks retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrive feedbacks...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot get feedbacks...!", err: err.message});
    }
}