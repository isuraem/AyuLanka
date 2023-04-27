const router = require("express").Router();
const buyreController = require("../controllers/buyerController");
const Buyer = require("../models/buyer");

// route for add buyer
router.route("/addBuyer").post((req,res) => {
    console.log("buyer route", req.body);
    const response = buyreController.createBuyerController(req.body, res);
});

// route for get one buyer details using email and password
router.route("/getBuyer/:Email").get((req,res)=>{
    // let id = req.params.id;
    let Email = req.params.Email;
    // let Password = req.params.Password;

    let getData = {
        Email: Email,
        // Password: Password,
        body: req.body,
    };

    const response = buyreController.getOneBuyerController(getData, res);
});

// route for get one buyer details using id
router.route("/getBuyer/:id").post((req,res)=>{
    let id = req.params.id;
    // let Email = req.params.Email;
    // let Password = req.params.Password;

    let getData = {
       id: id,
        body: req.body,
    };

    const response = buyreController.getSingleBuyerController(getData, res);
});

// route for get all buyers
router.route("/getAllBuyers").get((req,res) => {
    console.log("getAll...");
    const response = buyreController.getBuyerController(req.body.data ,res);
});

// route for update selected buyer using id
router.route("/updateBuyer/:id").post((req,res) => {
    console.log("request to update", req)
    let id = req.params.id;
    let updateBuyer = {
        id: id,
        body: req.body,
    };

    const response = buyreController.updateBuyerController(updateBuyer, res);
});

// route for delete buyer using id
router.route("/deleteBuyer").delete((req,res)=>{
    console.log("delete buyer", req);
    let id = req.body._id;
    let deleteBuyer = {
        id:id,
        body: req.body,
    };

    const response = buyreController.deleteBuyerContraller(deleteBuyer,res);
})

module.exports = router;