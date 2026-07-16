const http=require('http');
http.createServer((req,res)=>{
    res.write("Hello\n");
    res.write("Creating server");
    console.log(`${req.url}`);
    console.log(`${req.headers}`);
    console.log(`${req.method}`);
    res.end();
}).listen(3000,()=>{
    console.log("Server listening on port 3000")
});