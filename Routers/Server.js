const express=require("express");
const app=express();
const userRouter=require("./routes/userRoutes");
const productRouter=require("./routes/productRoutes");
const orderRouter=require("./routes/orderRoutes");
app.use("/users",userRouter);
app.use("/products",productRouter);
app.use("/orders",orderRouter);
app.listen(3000,(err)=>{
    console.log(err.message);
});