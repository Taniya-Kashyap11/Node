const mongoose=require('mongoose');
const MONGO_URL='mongodb://localhost/Practice';
async function connectDb() {
    try{
        await(mongoose.connect(MONGO_URL));
        console.log("Connected successfully");
    }catch(error){
        console.log(error);
    }
}
module.exports=connectDb;