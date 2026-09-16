const fs=require('fs');
const readData=function()
{
     const data=JSON.parse(fs.readFileSync("data.json","utf-8"));
     return data;
}
const writeData=function(data)
{
    fs.writeFileSync("data.json",data);
}
const addUser= function(obj,res){
   const existingData=readData();
   const newData=[...existingData,obj];
   writeData(JSON.stringify(newData));
    res.status(400).json({
        message:"Item added sucessfully",
        data:newData
    })
}
const displayItems=function(res,req){
  const items=readData();
   res.status(400).json({
        message:"Items",
        data:items
    })
}
const displayItem=function(productId,res){
  const items=readData();
  const item=items.filter((item)=> item.id === productId)
    res.status(400).json({
        message:"Item",
        data:item
    })
}
const updateItem=function(productId,product,res)
{
     const items=readData();
    const replaceItem=items.find((item)=> item.id === productId);
    const index=items.indexOf(replaceItem);
       if (index === -1) {
         res.status(400).json(
            {message:"Item not found"});
            return;
    }
    items[index]=product;
    writeData(JSON.stringify(items));
    res.status(400).json({
        message:"Updated Item",
        data:items
    })
}
const deleteItem=function(productId,res)
{
    const items=readData();
    const updatedItems=items.filter((item)=> item.id !== productId);
    writeData(JSON.stringify(updatedItems));
    res.status(200).json({
        message :"Deleted successfully"
    })
}
const patchItem=function(productId,obj,res)
{
     const items=readData();
     const replaceItem=items.find((item)=>item.id==productId);
    const index=items.indexOf(replaceItem);
       if (index === -1) {
        res.status(400).json(
            {message:"Item not found"});
        return;
    }
    for(let x in obj)
    {
          items[index][x]=obj[x];
    }
    writeData(JSON.stringify(items));
      res.status(200).json({
        message:"Updated sucessfully",
        data:items
    })
}
module.exports={
    addUser,
    displayItems,
    displayItem,
    updateItem,
    patchItem,
    deleteItem,
}