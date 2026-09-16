const express=require("express");
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.post("/",(req,res)=>{
    const {name}=req.body;
    res.send(`Welcome ${name}`);
})
app.listen(3000,(error)=>{
    if(!error)
    {
        console.log("Running on 3000");
    }else{
        console.log(error);
    }
})