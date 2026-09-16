const fs=require('fs');
const data=JSON.parse(fs.readFileSync("data.json","utf-8"));
const express=require("express");
const ejs=require('ejs');
const app=express();
app.set("view engine",'ejs');
const getPortfolio=(req,res)=>{
    res.render('home',{data});
}
const getAbout=(req,res)=>{
    res.render('about',{data});
}
const getProjects=(req,res)=>{
    res.render('projects',{data});
}
const getContact=(req,res)=>{
    res.render("contact");
}
module.exports={
    getPortfolio,
    getAbout,
    getProjects,
    getContact
}