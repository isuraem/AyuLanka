const router = require("express").Router();
const loginController = require("../controllers/loginController");
const Buyer = require("../models/buyer");

// router for login
router.route("/login/:Email/:Password").get((req,res)=>{
    let Email = req.params.Email;
    let Password = req.params.Password;

    let getData = {
        Email: Email,
        Password: Password,
        body: req.body,
    };

    const response = loginController.buyerLoginController(getData,res);
});

module.exports = router;