const logger=(req,res,next)=>{
    console.log("Logger middleware");
      console.log("Logger2 middleware");
  
    // next('route');
}
const logger2=(req,res,next)=>{
    console.log(`req url :${req.url}`);
    console.log("Logger2 middleware");
    const err=new Error("Something went wrong");
    err.statusCode=404;
    next(err);
}
module.exports={logger,logger2};