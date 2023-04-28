const { response } = require("express");
const mongoose = require("mongoose");
const Cart = require("../models/cart");
const Product = require("../models/product")

module.exports.addToCart = async (req, res) => {
  try {


    const cartQuantity = req.cartQuantity;
    const itemId = req.itemId;
    const item = req.item;
    const itemPrice = req.itemPrice;
    const userId = req.userId;

    const newCartItem = new Cart({

      cartQuantity,
      itemId,
      item,
      itemPrice,
      userId

    });

    const cartItem = await newCartItem.save();

    return {
      msg: "success",
      data: response,
    };
  } catch (err) {
    throw err;
  }
};


//view Cart service for view all CArt details
module.exports.viewCartService = async (req, res) => {
  try {
    let response = await Cart.find();
    // console.log("response", response);
    let cartArraye = [];

    for (let index = 0; index < response.length; index++) {
      let id = response[index].itemId;
      console.log("id", id);
      let productResponse = await Product.findOne({ _id: id })
      console.log("productRes", productResponse);

      if (productResponse) {
        let cartObject = {
          productDetails: productResponse,
          cartDetails: response[index],
        }

        cartArraye.push(cartObject);
      }

    };

    if (response) {
      return {
        msg: "success",
        data: cartArraye,
      };
    } else {
      return {
        msg: "faild",
        data: response,
      };
    }
  } catch {
    throw err;
  }
};

module.exports.updateCartItemService = async (req, res) => {
  console.log(">>>>>>>>", req)
  try {
    let response = await Cart.findOneAndUpdate(
      { itemId: req.itemId },
      { $set: { cartQuantity: req.cartQuantity } },

    );
    console.log("res>>", response)

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "fail",
        data: null,
      };
    }
  } catch (err) {
    throw err;
  }
};


module.exports.deleteCartItemService = async (req, res) => {
  try {
    console.log("request", req)
    let response = await Cart.findOneAndDelete(
      { itemId: req.itemId },

    );

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "fail",
        data: null,
      };
    }
  } catch (err) {
    throw err;
  }
};
