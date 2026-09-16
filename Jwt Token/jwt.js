const express=require("express");
const jwt=require("jsonwebtoken");
const cookieparser=require("cookie-parser");
const app=express();
app.use(cookieparser());
const SECRET_KEY="vyue34gfeui";
const jwtToken=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.json({
            message:"Token required",
            success:false
        })
    }
    try{
     const user=jwt.verify(token,SECRET_KEY);
    req.user=user;
    next();
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Token invalid "
        })
    }
  
}
app.get("/login",(req,res)=>{
    const token=jwt.sign({id:2,name:"taniya",role:"Admin"},SECRET_KEY,{expiresIn:"30s"});
    res.cookie("token",token,{httpOnly:true,maxAge:15000});
    console.log(token);
    res.json({
        message:"Login sucessfully",
        success:true
    })
})
app.get("/protected",jwtToken,(req,res)=>{
    res.json({
        message:"protected route",
        success:true,
        user:req.user
    })
})
app.listen(3000);