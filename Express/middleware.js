const express=require("express");
const app=express();
const {logger,logger2}=require("./middlewares/logger");
app.use('/about',logger2);    //Passed about as prefix it will work for all the  paths with about prefix /about/items/details
// app.use(logger);    //Application level middleware (is applied on every request by default)
app.get("/",logger2,(req,res)=>{
    console.log("Home page");
    res.send("Home page");
})
// app.get("/",(req,res)=>{
//     console.log("Guest Page");
//     res.send("Guest Page");
// })
// app.get("/about",(req,res)=>{
//     console.log("ABout page");
//     res.send("About page");
// })
// app.get("/about",logger2,(req,res)=>{            //Route - level middleware
//     console.log("About page");
//     res.send("ABout page");
// })

app.use((err,req,res,next)=>{
    console.log(err.message);
      if(err.statusCode===400)
    {
     return   res.send({success:false,error:"Not found"})
    }
    next(err);
})
app.use((err,req,res,next)=>{
    // console.log(err.message);
    res.send({success:false,error:"Something went wrong"});
})
app.listen(3000,()=>{
    console.log("Server running on 3000");
})