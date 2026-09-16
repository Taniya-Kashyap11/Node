const Order=require("../Models/Orders");
const Product=require("../Models/Products");
const getOrder=async(req,res)=>{
   const orderData= await Order.find();
   res.status(200).json({
    success:true,
    data : orderData
   })
}
const getOrderById=async(req,res)=>{
  const order = await Order.findById(req.params.id);
  res.status(200).json({
    success:true,
    data:order
  })
}
const addOrder=async(req,res,next)=>{
    const obj=req.body;
    const {productId}=req.body;
    const product=await Product.findById(productId);
      if(product==null)
     {
       return next(new Error("Product is not found"));
     }
     if(obj.quantity>product.stock)
     {
        return next(new Error("Product quantity is in stock is less"));
     }
     obj.totalPrice=product.price * obj.quantity;
    const order = new Order(obj);
    order.save();
     product.stock=product.stock - obj.quantity;
     const newProduct= await Product.findByIdAndUpdate(product.id,product,{returnafter:true});
     newProduct.save();
     res.status(200).json({
        success:true,
        message:"order added successfully",
        order : order
     })
}

const deleteOrder=async(req,res)=>{
  const data=await Order.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    data:order
  })
}
module.exports={
    getOrder,
    getOrderById,
    addOrder,
    deleteOrder
}