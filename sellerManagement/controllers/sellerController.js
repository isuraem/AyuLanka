const { response } = require("express");
const SellerService = require("../services/sellerService");


//controller for add Seller
module.exports.createSellerController = async (req, res) => {
    try {
        let serviceResponse = await SellerService.createSellerService(req);
        if ((serviceResponse.msg = "success")) {
            // return serviceResponse
            return res.status(200).send({ message: "New Seller is added" });
        } else {
            return res.status(300).send({ message: "Cannot add new Seller !" });
        }
    } catch (err) {
        return res
            .status(300)
            .send({ message: "Cannot add new Seller !", err: err.message });
    }
};
//controller for get one Seller
module.exports.getOneSellerController = async (req, res) => {

    try {
        let serviceResponse = await SellerService.getOneSellerService(req);

        if ((serviceResponse.msg = "success")) {
            // return serviceResponse
            return res.status(200).send({
                message: "Seller details retrived",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({ message: "Cannot retrive seller!" });
        }
    } catch (err) {
        return res
            .status(300)
            .send({ message: "Cannot retrive seller !", err: err.message });
    }
};