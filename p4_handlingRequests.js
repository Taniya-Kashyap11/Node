const http=require('http')
// http.createServer((req,res)=>{
// if(req.url=='/' && req.method=="GET")
// {
//     res.write("Home Page");
// }else if(req.url=='/about' && req.method=="GET")
// {
//     res.write("About Page");
// }
// else if(req.url=="/contact" && req.method=="GET") {
//     res.end("Contact Page");
// }
// res.end();
// }).listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });
http.createServer((req,res)=>{
    if(req.url=="/" && req.method=='POST')
    {
        let body="";
        req.on('data',(chunk)=>
        body+=chunk.toString());
        req.on('end',()=>{
            res.write(body);
            res.end();
        })
    }
}).listen(3000,()=>{
    console.log("Server is running on 3000 port");
})