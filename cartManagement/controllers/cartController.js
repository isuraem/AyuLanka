const { response } = require("express");
const CartService =require("../services/cartService")

module.exports.addItemToCartController = async (req, res) => {
    try {
        let serviceResponse = await CartService.addToCart(req);
        if (serviceResponse.msg='success') {
            return res.status(200).send({ message: "Item added to cart" });
        } else {
            return res.status(400).send({ message: "Failed to add item to cart" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
};

  //controller for view Product
  module.exports.viewCartController = async (req, res) => {
    try {
      let serviceResponse = await CartService.viewCartService(req);
      if ((serviceResponse.msg = "success")) {
        // return serviceResponse
        return res.status(200).send({
          message: "Cart details retrieved",
          data: serviceResponse.data,
        });
      } else {
        return res.status(300).send({ message: "Cannot view Cart!" });
      }
    } catch (err) {
      return res
        .status(300)
        .send({ message: "Cannot view Cart !", err: err.message });
    }
  };

  module.exports.updateCartItemController = async (req, res) => {
    try {
  
  
      let serviceResponse = await CartService.updateCartItemService(req);
  
      if (serviceResponse.msg === "success") {
        return res.status(200).send({
          message: "Cart item updated",
          data: serviceResponse.data,
        });
      } else {
        return res.status(400).send({
          message: "Failed to update cart item",
          data: null,
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error",
        err: err.message,
      });
    }
  };
  

  module.exports.deleteCartItemController = async (req, res) => {
    try {
  
  
      let serviceResponse = await CartService.deleteCartItemService(req);
  
      if (serviceResponse.msg === "success") {
        return res.status(200).send({
          message: "Cart item Deleted",
          data: serviceResponse.data,
        });
      } else {
        return res.status(400).send({
          message: "Failed to delete cart item",
          data: null,
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error",
        err: err.message,
      });
    }
  };
  