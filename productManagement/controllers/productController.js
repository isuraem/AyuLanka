const { response } = require("express");
const ProductService = require("../services/productService");

//controller for add Product
module.exports.createProductController = async (req, res) => {
    try {
      let serviceResponse = await ProductService.createProductService(req);
      if ((serviceResponse.msg = "success")) {
        // return serviceResponse
        return res.status(200).send({ message: "New Product is added" });
      } else {
        return res.status(300).send({ message: "Cannot add new Product !" });
      }
    } catch (err) {
      return res
        .status(300)
        .send({ message: "Cannot add new Product !", err: err.message });
    }
  };

  //controller for view Product
module.exports.viewProductController = async (req, res) => {
    try {
      let serviceResponse = await ProductService.viewProductService(req);
      if ((serviceResponse.msg = "success")) {
        // return serviceResponse
        return res.status(200).send({
          message: "Product details retrieved",
          data: serviceResponse.data,
        });
      } else {
        return res.status(300).send({ message: "Cannot view Product!" });
      }
    } catch (err) {
      return res
        .status(300)
        .send({ message: "Cannot view Product !", err: err.message });
    }
  };

  //controller for get one Seller products
module.exports.getOneSellerProductsController = async (req, res) => {
  
    try {
        let serviceResponse = await ProductService.viewSellerProductService(req);
    
        if ((serviceResponse.msg = "success")) {
          // return serviceResponse
          return res.status(200).send({
            message: "Seller product details retrived",
            data: serviceResponse.data,
          });
        } else {
          return res.status(300).send({ message: "Cannot retrive seller's products!" });
        }
      } catch (err) {
        return res
          .status(300)
          .send({ message: "Cannot retrive seller's products !", err: err.message });
      }
};