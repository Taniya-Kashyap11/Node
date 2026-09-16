const mongoose=require('mongoose');
async function dbConnect() {
    try{
        await(mongoose.connect(process.env.MONGO_URL));
        console.log("Connected successfully");
    }catch(err){
        console.log(err.message);
    }
}
module.exports=dbConnect;