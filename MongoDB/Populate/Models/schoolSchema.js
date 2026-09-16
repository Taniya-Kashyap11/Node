const mongoose=require('mongoose');
const schoolSchema= new mongoose.Schema({
    name:{
        type:String,
        // required:true
    }
})
const School= new mongoose.model("School",schoolSchema);
module.exports=School;