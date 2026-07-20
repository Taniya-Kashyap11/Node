const fs=require('fs');
const data1=JSON.parse(fs.readFileSync("users.json","utf-8"));
const data2=JSON.parse(fs.readFileSync("addresses.json","utf-8"));
const combineData=data1.map((user)=>{
const address= data2.find((add)=> user.name === add.name)
 return{
    ...user,
    address:address.address
 }
})
console.log(combineData);
fs.writeFileSync("combinedData.json",JSON.stringify(combineData));