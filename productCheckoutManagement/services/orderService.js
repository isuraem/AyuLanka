const { response } = require("express");
const mongoose = require("mongoose");
let Order = require("../models/order");
let Delivery = require("../models/delivery")

module.exports.createOrderService = async (req, res) => {
    console.log("reqqOrder>>", req)
    try {
        const orderID = req.orderID;
        const productID = req.productID;
        const sellerID = req.sellerID;
        const deliveryServiceID = req.deliveryServiceID;
        const paymentID = req.paymentID;
        const unitPrice = Number(req.unitPrice);
        const quantity = Number(req.quantity);
        const total = Number(req.total);
        const isOnlinePayment = req.isOnlinePayment;


        const newOrder = new Order({
            orderID,
            productID,
            sellerID,
            deliveryServiceID,
            paymentID,
            unitPrice,
            quantity,
            total,
            isOnlinePayment
        });
        let reponse = await newOrder.save();

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

module.exports.createDeliveryForOrderService = async (req, res) => {

    try {
        const orderID = req.orderID;
        const street = req.street;
        const province = req.province;
        const city = req.city;
        const postalCode = req.postalCode;
        const country = req.country;
        const phone = req.phone;
        const email = req.email;


        const newDelivery = new Delivery({
            orderID,
            street,
            city,
            province,
            postalCode,
            country,
            phone,
            email

        });

        let reponse = await newDelivery.save();

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
        throw err
    }
}

//view product service for view all product details
module.exports.viewOrderService = async (req, res) => {
    try {
      let response = await Order.find();
  
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
    } catch {
      throw err;
    }
  };


// create service for update
module.exports.updateOrderService = async(req,res) => {
  try {
      let id = req.id;
      console.log("req>>>",req.id);
      let idString = id.toString();

      // destructure
      const {
          deliveryServiceID,
          unitPrice,
          quantity,
          total
      } = req.body;

      const updateOrder = {
          deliveryServiceID,
          unitPrice,
          quantity,
          total
      };

      let response = await Order.findByIdAndUpdate(
          {_id: idString},
          updateOrder
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


// create service for delete orders
module.exports.deleteOrderService = async(req,res)=>{
  try {
      let id = req.id;
      console.log("req>>>",req.id);
      let idString = id.toString();

      let response = await Order.findByIdAndDelete({_id: idString});

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



//--------------------------------------------------------------------
//view Delivery service for view all Delivery details
module.exports.viewDeliveryService = async (req, res) => {
  try {
    let response = await Delivery.find();

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
  } catch {
    throw err;
  }
};


// create service for update
module.exports.updateDeliveryService = async(req,res) => {
  try {
      let id = req.id;
      console.log("req>>>",req.id);
      let idString = id.toString();

      // destructure
      const {
          orderID,
          street,
          city,
          province,
          postalCode
      } = req.body;

      const updateDelivery = {
          orderID,
          street,
          city,
          province,
          postalCode
      };

      let response = await Delivery.findByIdAndUpdate(
          {_id: idString},
          updateDelivery
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


// create service for delete deliveries
module.exports.deleteDeliveryService = async(req,res)=>{
  try {
      let id = req.id;
      console.log("req>>>",req.id);
      let idString = id.toString();

      let response = await Delivery.findByIdAndDelete({_id: idString});

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