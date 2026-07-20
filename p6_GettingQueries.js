const url=require('url');
const http=require('http');
http.createServer((req,res)=>{
    const address="http://localhost:3000/search?item=book&user=guest";
    const q=url.parse(address);
    console.log(q.host);
    console.log(q.data);
}).listen(3000,()=>{
    console.log("Server is running");
})