const http=require('http');
http.createServer((req,res)=>{
if(req.method==="PUT")
{
    if(req.url==="/products/3")
    {
        let products=[
            {id:"1",name:"Product A"},
            {id :"2",name:"Product B"},
            { id:"3",name:"Product C"}
        ]
        const productID=req.url.split("/")[2];
        const replaceProduct=products.find((product)=> product.id === productID);
            // console.log(replaceProduct);
            const index=products.indexOf(replaceProduct);
            // console.log(index);
            products[index]={id:"3",name:"New Product"};
            console.log(products);
        //      res.writeHead("200",{"content-type":"application/json"});
        // res.write(products);
        // res.end();
    }else{
        // res.writeHead("200",{"content-type":"text/plain"});
        // res.write("Product not found");
        // res.end();
    }

}
if(req.method==="PATCH")
{
     if(req.url==="/products/3")
    {
        let products=[
            {id:"1",name:"Product A"},
            {id :"2",name:"Product B"},
            { id:"3",name:"Product C"}
        ]
        const productID=req.url.split("/")[2];
        const replaceProduct=products.find((product)=> product.id === productID);
            // console.log(replaceProduct);
            const index=products.indexOf(replaceProduct);
            // console.log(index);
            products[index].name="New Product through Patch";
            console.log(products);
        //      res.writeHead("200",{"content-type":"application/json"});
        // res.write(products);
        // res.end();
    }else{
        // res.writeHead("200",{"content-type":"text/plain"});
        // res.write("Product not found");
        // res.end();
    }
}
if(req.method==="DELETE"){
     if(req.url==="/products/3")
    {
        let products=[
            {id:"1",name:"Product A"},
            {id :"2",name:"Product B"},
            { id:"3",name:"Product C"}
        ]
        const productID=req.url.split("/")[2];
        const updatedProducts=products.filter((product)=> product.id !== productID);
            // console.log(replaceProduct);
           
            // console.log(index);
            
            products=updatedProducts;
            console.log(products);
        //      res.writeHead("200",{"content-type":"application/json"});
        // res.write(products);
        // res.end();
    }else{
        // res.writeHead("200",{"content-type":"text/plain"});
        // res.write("Product not found");
        // res.end();
    } 
}
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
})