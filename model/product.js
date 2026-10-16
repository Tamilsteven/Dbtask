  import mongoose from "mongoose";

  const products = new mongoose.Schema({
       pname :String,
       price:Number,
       category:String,
       stock:Number

  })

  const productModel = mongoose.model("productDetails",products);
  export default productModel;