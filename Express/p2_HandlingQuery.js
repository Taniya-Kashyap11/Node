const express=require("express");
const app=express();
const path=require("path");
const fs=require('fs');
const FileData=fs.readFileSync("index.html","utf-8");
app.use(express.urlencoded({extended:true})); // Middleware to parse urlencoded data
app.use(express.static(path.join(__dirname,"images")));
app.post("/user/:id",async(req,res)=>{
    try{
     const {id}=req.params;
    const queryParams=req.query;
    res.status(200).json({
        Query:queryParams,
        id:id
    })
    }catch(err)
    {
        res.status(400).json({
            message:err.message
        })
    }
})
// app.get("/",(req,res)=>{
//     console.log(req.body);//This will contain parsed form data
//     res.send(req.body)
// })
app.get("/file",(req,res)=>{
    res.sendFile(path.join(__dirname,"image.jpg"));
})
app.get("/html",(req,res)=>{
    // res.writeHead(200,{"content-type":"text/html"});
    // res.end(FileData);
    res.send(FileData);
})
app.listen(3000,()=>{
    console.log("Running on 3000");
})