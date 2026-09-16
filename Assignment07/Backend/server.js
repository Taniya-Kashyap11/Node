const express=require("express");
const cors=require("cors");
const fs=require('fs');
const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.post("/signup",(req,res)=>{
    console.log(req.body);
    fs.writeFileSync("users.json",JSON.stringify(req.body));
    res.send("Signed in successfully");
})
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("Login successfully");
})
app.listen(3000,()=>{
    console.log("Running on 3000");
})