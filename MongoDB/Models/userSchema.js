const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
    name:{type : String ,required:true },
    age: {type: Number ,min: 18},
    role :{type : String, enum:["admin","user"]}
},{
    timestamps:true
})
const User=new mongoose.model('User',userSchema);
module.exports=User;