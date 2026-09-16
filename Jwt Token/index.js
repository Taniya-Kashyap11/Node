const express=require("express");
const jwt=require("jsonwebtoken");
const cookieparse=require("cookie-parser");
const app=express();
app.use(cookieparse());
const key="FTYGIUJ";
const jwtToken=(req,res,next)=>{
  const token=req.cookies.token;
  if(!token){
    return res.send("Token required");
  }
  try{
    const user=jwt.verify(token,key);
    req.user=user;
    next();
  }catch(err){
    return res.send("Invalid token or invalid");
  }
    
}
app.get("/login",(req,res)=>{
    const token=jwt.sign({id:2,name:"Taniya"},key,{expiresIn:"30s"});
    console.log(token);
    res.cookie("token",token,{httpOnly:true,maxAge:"15000"});
    res.json({
      message:"Login successfull",
      success:true
    })
    // res.send("Login successfull");
})
app.get("/protected",jwtToken,(req,res)=>{
  res.json({
    message:"Protected route",
    user:req.user,
    success:true
  })
    // res.send(`Protected route for ${req.user.name}`);
})
app.listen(3000);