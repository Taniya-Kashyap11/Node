const mongoose= require('mongoose');
const orderSchema= new mongoose.Schema({
    userId:{type :String},
    quantity: {type : Number},
    productId :{type :String, required : true},
    
    totalPrice:{type:Number}
    
},{timestamps:true});
const Order=new mongoose.model("Order",orderSchema);
module.exports=Order;