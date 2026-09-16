const express=require("express");
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
app.post("/users",(req,res)=>{
    console.log(req.body);
    res.send("Received");
})
app.listen(3000);