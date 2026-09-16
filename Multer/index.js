const express=require("express");
const app=express();
const path=require("path");
const multer=require("multer");
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
const storage=multer.diskStorage({
    destination : function(req,file,cb){
      return  cb(null,"./uploads")
    },
    filename: function(req,file,cb){
      return  cb(null,file.originalname)
    }
})
const upload=multer({storage});
app.get("/",(req,res)=>{
    return res.render("home");
})
app.post("/upload",upload.single('Image'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
})
app.listen(3000);
