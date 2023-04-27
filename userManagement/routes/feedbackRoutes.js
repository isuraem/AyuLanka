const router = require("express").Router();
const feesbackController = require("../controllers/feedbackController");
const Feedback = require("../models/feedback");

// route for add feedback
router.route("/addFeedback").post((req,res)=>{
    console.log("feedbackRoute", req.body);
    const response = feesbackController.createFeedbackeController(req.body, res);
});

// route for get all feedbacks
router.route("/getAllFeedbacks").get((req,res)=>{
    console.log("getAll...");
    const response = feesbackController.getFeedbackController(req.body.data , res);
});

module.exports = router;