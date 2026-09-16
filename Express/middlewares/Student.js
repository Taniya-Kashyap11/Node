const fs=require('fs');
const logger=(req,res,next)=>{
    const logFile=JSON.parse(fs.readFileSync("logs.json","utf-8"));
    const newData={
        CurrentTime: Date.now().toISOString(),
        HTTPMethod : `${req.method}`,
        RequestedURL : `${req.url}`
    }
    const RequestData=[...logFile,newData];
    fs.writeFileSync("logs.json",JSON.stringify(RequestData));
    next();
}
const validateStudent=(req,res,next)=>{
    const {name,age,course}=req.body;
    if(name.length===0)
    {
        return next(new Error("Name should not be empty"));
    }else if(course.length===0)
    {
         return next(new Error("Course should not be empty"));
    }
    else if(age<17)
    {
         return next(new Error("Age should be greater than 17"));
    }
    next();
}
module.exports={
    logger,
    validateStudent,
}