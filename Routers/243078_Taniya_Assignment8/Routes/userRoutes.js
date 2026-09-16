const express=require("express");
const router=express.Router();
const {getUser,getUserId,addUser,updateUser,deleteUser}=require("../controllers");
router.get("/",getUser);
router.get("/:id",getUserId);
router.post("/",addUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
module.exports=router;