const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('<h1>Hwllo</h1>');
}).listen(3000,()=>{
    console.log("server is running on 3000 port");
})