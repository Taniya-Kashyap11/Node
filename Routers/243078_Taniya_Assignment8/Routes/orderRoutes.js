const express=require("express");
const router=express.Router();
const {getOrder,getOrderById,addOrder,deleteOrder}=require("../controllers");
router.get("/",getOrder);
router.get("/:id",getOrderById);
router.post("/",addOrder);
router.delete("/:id",deleteOrder);
module.exports=router;