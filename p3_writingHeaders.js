const http=require('http')
const fs=require('fs');
http.createServer((req,res)=>{
  const data=fs.readFileSync("demo.html","utf-8");
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(data);
}).listen(3000,()=>{
    console.log("server is running on 3000 port");
})

