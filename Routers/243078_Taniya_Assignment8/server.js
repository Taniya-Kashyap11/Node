const express=require("express");
const app=express();
require('dotenv').config();
app.use(express.json());
const dbConnect=require('./config/db');
const userRouter=require("./routes/userRoutes");
const productRouter=require("./routes/productRoutes");
const orderRouter=require("./routes/orderRoutes");
const errorMiddleware=require("./middlewares/errorMiddleware");
dbConnect();
app.use("/users",userRouter);
app.use("/products",productRouter);
app.use("/orders",orderRouter);
app.use(errorMiddleware);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log("Running  port 3000");
});