const express=require("express");
const router=express.Router();
const {getPortfolio,getAbout, getProjects,getContact}=require("../controllers/portfolioController");
router.get("/",getPortfolio);
router.get("/about",getAbout);
router.get("/projects",getProjects);
router.get("/contacts",getContact);
module.exports=router;