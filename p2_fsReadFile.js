const fs=require("fs")
// Sync file reading operation
const data1=fs.readFileSync("index.html",{"encoding":"utf-8"});
console.log(data1);
//Async File reading operation
const data=fs.readFile("test.txt",'utf8',(err,data)=>{
    try
    {
        console.log(data);
    }catch(err)
    {
        console.log(err);
    }

});
// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }