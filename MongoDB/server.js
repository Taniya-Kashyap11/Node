const express=require('express');
const app=express();
const User=require("./Models/userSchema");
app.use(express.json());
const connectDb=require('./db');
connectDb();
app.post("/users",async(req,res)=>{
    try{
        console.log(req.body);
        const user= new User(req.body);
    await user.save();
    res.json({user:user,message:"User added sucessfully"});
    }catch(err){
        console.log(err);
    } 
})
app.post("/users/:id",async(req,res)=>{
    try{
        const id=req.params.id;
      const user= await User.findById(id);
      res.json({
        user:user,
        message: "Found successfully"
      })
    }catch(err){
        console.log(err);
    }
})
app.get("/users",async(req,res)=>{
    try{
        const users= await User.find();
        res.json({
            Users: users,
            message : "Fetched successfully"
        })
    }catch(err){
        console.log(err);
    }
})
app.get("/users",async(req,res)=>{})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})