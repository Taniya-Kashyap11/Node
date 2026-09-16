const User = require('../Models/User');
const getUser=async(req,res)=>{
  const userData = await User.find();
   res.status(200).json({
    success:true,
    data : userData
   })
}
const getUserId=async(req,res)=>{
  const id=req.params.id;
  const user= await User.findById(id);
  res.status(200).json({
    success:true,
    data:user
  })
}
const addUser=async(req,res)=>{
    const user= new User(req.body);
    user.save();
     res.status(200).json({
        success:true,
        message:"user added successfully",
        user:user
     })
}
const updateUser=async(req,res,next)=>{
     const id=req.params.id;
    const user=await User.findByIdAndUpdate(id,req.body,{new :true, runValidators :true});
    user.save();
    res.status(200).json({
        message:"Updated user",
        data:user
})
next();
}
const deleteUser=async(req,res)=>{
    const id=req.params.id;
  const user= await User.findByIdAndDelete(id);
  res.status(200).json({
    success:true,
    data:user
  })
}
module.exports={
    getUser,
    getUserId,
    addUser,updateUser,
    deleteUser
}