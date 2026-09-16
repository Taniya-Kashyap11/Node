const express=require("express");
const portfolioRoute=require("./routes/portfolioRoute");
const path=require("path");
const app=express();
const ejs=require("ejs");
app.use(express.static(path.join(__dirname),'public'));
app.set("view engine","ejs");
app.use("/",portfolioRoute);
app.listen(3000);