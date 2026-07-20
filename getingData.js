exports.gettingData=(req,res)=>{
 //   console.log(req);
     let body="";
        req.on('data',(chunks)=>
        body+=chunks.toString());
        console.log(body);
        res.end(body);
     return body;
          
}
