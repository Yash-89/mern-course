import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetching the products: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image)
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating Product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product ID" });

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error updating the product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product ID" });

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return res
        .status(404)
        .json({ success: false, message: "Product not found with that ID" });
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    console.error("Error Deleting the Product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// import mongoose from "mongoose";
// import Product from "../models/product.model.js";

// export const getProducts = async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json({ success: true, data: products });
//     } catch (error) {
//         console.log("Error in fetching the products: ", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// }

// export const createProduct = async (req, res) => {
//     const product = req.body; // user will send this data

//     if (!product.name || !product.price || !product.image)
//         return res.status(400).json({ success: false, message: "Please provide all the fields" });

//     const newProduct = new Product(product);

//     try {
//         await newProduct.save();
//         res.status(201).json({ success: true, data: newProduct });
//     } catch (error) {
//         console.error("Error in create Product: ", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// }

// export const updateProduct = async (req, res) => {
//     const {id} = req.params;
//     const product = req.body;

//     if (!mongoose.Types.ObjectId.isValid(id))
//         return res.status(404).json({ success: false, message: "Invalid Product ID" });

//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
//         res.status(200).json({ success: true, data: updatedProduct })
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// }

// export const deleteProduct = async (req, res) => {
//     const {id} = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id))
//         return res.status(404).json({ success: false, message: "Invalid Product ID" });

//     try {
//         await Product.findByIdAndDelete(id);
//         res.status(200).json({ success: true, message: "Product Deleted" });
//     } catch (error) {
//         console.log("Error in deleting the products: ", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// }
