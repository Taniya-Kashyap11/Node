const Product=require("../Models/Products");
const getProducts=async(req,res)=>{

  const products=await Product.find();
   res.status(200).json({
    success:true,
    data : products
   })
}
const getProductById=async(req,res)=>{
  const product= await Product.findById(req.params.id);
  res.status(200).json({
    success:true,
    data:product
  })
}
const addProduct=async(req,res)=>{
    const product=new Product(req.body);
    product.save();
     res.status(200).json({
        success:true,
        message:"Product added successfully",
        product : product
     })
}
const updateProduct=async(req,res,next)=>{
    const product=await Product.findByIdAndUpdate(req.params.id,req.body,{ returnDocument: "after", runValidators :true});
    res.status(200).json({
        message:"Updated product",
        data:product
})
}
const deleteProduct=async(req,res)=>{
 const product= await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    data:product
  })
}
module.exports={
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}