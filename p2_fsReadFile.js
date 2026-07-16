// const fs=require("fs")
// Sync file reading operation
// const data1=fs.readFileSync("index.html",{"encoding":"utf-8"});
// console.log(data1);
//Async File reading operation
// fs.writeFileSync("newFile.txt"," New file created and New content added");
// fs.appendFileSync("newFile.txt","Appended the content into the existing file and it prevent overwriting","utf-8");
// const data=fs.readFile("test.txt",'utf8',(err,data)=>{
//     try
//     {
//         console.log(data);
//     }catch(err)
//     {
//         console.log(err);
//     }

// });
// console.log(fs);
// const data=fs.readFileSync("newFile.txt",{"encoding":"utf-8"});
// console.log(data);

// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }
const fs=require('fs');
const data =JSON.parse(fs.readFileSync("test.json","utf-8"));
console.log(data);
// const data2={
//     "name":"xyz",
//     "class":"Bca"
// }
const data2 =JSON.parse(fs.readFileSync("package.json","utf-8"));
data.push(data2);
fs.writeFileSync("NewJsonFile.json",JSON.stringify(data),(err)=>{
    if(err)
     console.log(err);
})
const newData=fs.readFileSync("NewJsonFile.json","utf-8");
console.log(newData);

