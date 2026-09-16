const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    age:{
        type:Number,
        min:18,
        // required:true
    },
    school:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"School",
        // required:true
    }
})
const Student=new mongoose.model("Student",studentSchema);
module.exports=Student;