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
const addUser= function(obj){
   const existingData=readData();
   const newData=[...existingData,obj];
   writeData(JSON.stringify(newData));
}
const displayItems=function(){
  const items=readData();
    console.log(items);
}
const displayItem=function(productId){
  const items=readData();
  const item=items.filter((item)=> item.id === productId)
    console.log(item);
}
const updateItem=function(productId,product)
{
     const items=readData();
    const replaceItem=items.find((item)=> item.id === productId);
    const index=items.indexOf(replaceItem);
       if (index === -1) {
        console.log("Item not found");
        return;
    }
    items[index]=product;
    console.log(items);
    writeData(JSON.stringify(items));
}
const deleteItem=function(productId)
{
    const items=readData();
    const updatedItems=items.filter((item)=> item.id !== productId);
    writeData(JSON.stringify(updatedItems));
}
const patchItem=function(productId,productName)
{
     const items=readData();
    const replaceItem=items.find((item)=> item.id === productId);
    const index=items.indexOf(replaceItem);
       if (index === -1) {
        console.log("Item not found");
        return;
    }
    items[index].name=productName;
    console.log(items);
    writeData(JSON.stringify(items));
}
module.exports={
    addUser,
    displayItems,
    displayItem,
    updateItem,
    patchItem,
    deleteItem,
}