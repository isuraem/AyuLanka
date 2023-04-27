const {response} = require("express");
const buyerService = require("../services/buyerService");
// const {buyerValidationSchema} = require ("../validations/buyerValidation");

// controller for add buyer
module.exports.createBuyerController = async(req,res) =>{
    console.log("buyer contraller");
    try {
        console.log("buyer contraller try");
        // const {error} = buyerValidationSchema(req);
        // if(error){
        //     console.log("Vaalidation Failed");
        //     return res.status(300).send({message: "Vaalidation Failed...!", err: error});
        // }

        let serviceResponse = await buyerService.createBuyerService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            console.log("New Buyer Added");
            return res.status(200).send({message: "New Buyer Added...!"});
        } else{
            console.log("Cannot Add New Buyer");
            return res.status(300).send({message: "Cannot Add New Buyer...!"});
        }
    } catch (err) {
        console.log("buyer contraller catch",err);
        return res.status(300).send({message: "Cannot Add new Buyer...!", err: err.message});
    }
};

// controller for get one buyer using email and password
module.exports.getOneBuyerController = async(req,res) => {
    try {
        let serviceResponse = await buyerService.getOneBuyerService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            return res.status(200).send({
                message: "Buyer details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrieve buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot retrive buyer...!", err: err.message}); 
    }
};

// controller for get one buyer using id
module.exports.getSingleBuyerController = async(req,res) => {
    try {
        let serviceResponse = await buyerService.getSingleBuyerService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            return res.status(200).send({
                message: "Buyer details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrieve buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot retrive buyer...!", err: err.message}); 
    }
};

// controller for get all buyers
module.exports.getBuyerController = async(req,res) => {
    try {
        let serviceResponse = await buyerService.getBuyerService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "All buyers details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrive buyers...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot get buyers...!", err: err.message});
    }
};

// controller for update buyer
module.exports.updateBuyerController = async(req,res) => {
    try {
        let serviceResponse = await buyerService.updateBuyerService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "Buyers details updated...!",
            });
        } else {
            return res.status(300).send({message: "Cannot update buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot update buyers...!", err: err.message});
    }
};

// contraller for delete buyer
module.exports.deleteBuyerContraller = async(req,res) =>{
    try {
        let serviceResponse = await buyerService.deleteBuyerService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "Buyers details deleted...!",
            });
        } else {
            return res.status(300).send({message: "Cannot delete buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot delete buyer...!", err: err.message});
    }
}