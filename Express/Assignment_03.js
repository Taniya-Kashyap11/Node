const express=require('express');
const app=express();
const {
  addUser,
  displayItems,
  displayItem,
  updateItem,
  deleteItem,
  patchItem,
} = require("./Helper_modules");
app.use(express.json());
app.post("/items",(req,res)=>{
    const obj=req.body;
    addUser(obj,res);
})
app.get("/items/:id",(req,res)=>{
    const id=req.params.id;
    displayItem(parseInt(id),res);
})
app.get("/items",(req,res)=>{
    displayItems(res,req);
})
app.put("/items/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const obj=req.body;
    updateItem(id,obj,res);
})
app.patch("/items/:id",(req,res)=>{
    const obj=req.body;
    console.log(typeof(obj));
       const id=parseInt(req.params.id);
       patchItem(id,obj,res);

})
app.delete("/items/:id",(req,res)=>{
      const id=parseInt(req.params.id);
      deleteItem(id,res);
})
app.listen(3000,(err)=>{
    if(!err)
    {
        console.log("Server running on 3000");
    }else{
        console.log(err);
    }
})