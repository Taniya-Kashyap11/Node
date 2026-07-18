const fs=require('fs');
const addUser=function(name,course)
{
    const obj={
        "name":name,
        "course":course
    }
    const data=JSON.parse(fs.readFileSync("users.json"));
    const newData=[...data,obj];
    fs.writeFileSync("users.json",JSON.stringify(newData));
}
module.exports=addUser;