const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.route("/add").post((req, res) => {
    const response = ProductController.createProductController(req.body, res);
  });

  //route for view Product
router.route("/view").get((req, res) => {
    const response = ProductController.viewProductController(
      req.body.data,
      res
    );
  });

    //route for view seller Product
router.route("/sellerProducts/:id").post((req, res) => {
    let id = req.params.id;

    let searchData = {
        id: id,
        body: req.body,
      };
    const response = ProductController.getOneSellerProductsController(searchData,res);
  });
  module.exports = router;