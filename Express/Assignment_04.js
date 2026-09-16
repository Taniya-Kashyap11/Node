const express=require("express");
const app=express(); // creating instance
const fs=require('fs');
const {logger,validateStudent}=require("./middlewares/Student");
app.use(logger);
app.use(express.json());
const studentData=JSON.parse(fs.readFileSync("students.json","utf-8"));
app.get("/students",(req,res)=>{
    res.status(200).json({
        success:true,
        Data : studentData
    })
})
app.get("/students/:id",(req,res,next)=>{
const {id}=req.params;
    const student=studentData.find((s)=>s.id ==id);
    if(student === undefined)
    {
        return next(new Error("Student not found!"));
    }
    res.status(200).json({
        success:true,
        data:student
    })
})
app.post("/students",validateStudent,(req,res,next)=>{
    const newStudent=req.body;
    const newData=[...studentData,newStudent];
    fs.writeFileSync("students.json",JSON.stringify(newData));
    res.status(200).json({
        success:true,
        message :"Student added successfully"
    })
})
app.put("/students/:id",validateStudent,(req,res,next)=>{
    const id=parseInt(req.params.id);
    const obj=req.body;
    const replaceStudent=studentData.find((student)=> student.id === id);
    if(replaceStudent===undefined)
    {
          return next(new Error("Student not found"));
    }
    const index=studentData.indexOf(replaceStudent);
       if (index === -1) {
           return next(new Error("Student not found"));
    }
    studentData[index]=obj;
    fs.writeFileSync("students.json",JSON.stringify(studentData));
    res.status(200).json({
        message:"Updated Item",
        data:studentData
})
})

app.delete("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const newData=studentData.filter((s)=>s.id !== id);
    fs.writeFileSync("students.json",JSON.stringify(newData));
    res.status(200).json({
        success:true,
        message:"Deleted succesfully"
    })
})
app.use((err,req,res,next)=>{
    return res.status(400).json({
        success:false,
        message : err.message
    })
})
app.listen(3000,()=>{
    console.log("server running on port 3000");
})