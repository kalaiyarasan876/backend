const ProductModel = require("../models/productModel");

//get api product = /api/v1/product
exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i"
        }}:{};
  const product = await ProductModel.find(query);
  

  res.json({
    success: true,
    message: "Get product Working!",
    product
  });
  console.log(product);
};

//get single product api = /api/v1/product:id
exports.getSingleProducts = async (req, res, next) => {
  //   console.log(req.params.id, "ID");

  try {
    const product = await ProductModel.findById(req.params.id);

    res.json({
      success: true,
      message: "Get product Working!",
      product
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unabel to get product with that ID"
    });
  }
};
