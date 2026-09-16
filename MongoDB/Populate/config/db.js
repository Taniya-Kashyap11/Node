const mongoose=require('mongoose');
const MONGO_URL='mongodb://localhost/School';
async function connectDB(){
    try{
        await(mongoose.connect(MONGO_URL));
        console.log("Connected successfully");
    }catch(err){
        console.log(err);
    }
}
module.exports=connectDB;