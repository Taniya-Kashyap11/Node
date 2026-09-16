const express=require('express');
const app=express();
const connectDB=require('./config/db');
const Student = require('./Models/studentSchema');
const School=require('./Models/schoolSchema');
connectDB();
app.use(express.json());
app.get("/students",async(req,res)=>{
    const students= await Student.find().populate("school");
    res.json({
        students: students,
        message:"Fetched successfully"
    })
})
app.get("/schools",async(req,res)=>{
    try{
        const school=await School.find();
        res.json({
            schools : school,
            message:"School fetched successfully"
        })
    }catch(err){
        console.log(err);
    }
})
app.post("/schools",async(req,res)=>{
    try{
        const school= new School(req.body);
        school.save();
        res.json({
            school:school,
            success:true
        })
    }catch(err){
        console.log(err);
    }
})
app.post("/students",async(req,res)=>{
    try{
         const student= new Student(req.body);
           student.save();
     res.json({
            student:student,
            success:true
        })
    }catch(err){
        console.log(err);
    }
   
})

app.listen(3000,()=>{
    console.log("Running on port 3000");
})