const express=require("express");
const ejs=require('ejs');
const app=express();
const data={
    name:"Taniya",
    skills:["Java","c","C++"]
}
app.set("view engine",'ejs');
app.get("/",(req,res)=>{
    res.render('home',{data})
})
app.listen(3000);