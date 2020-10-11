const express = require("express");
const app = express();
app.use(express.static("public"))

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})
app.get("/pesticide.html",function(req,res){
  res.sendFile(__dirname+"/pesticide.html")
})
app.get("/government-schemes.html",function(req,res){
  res.sendFile(__dirname + "/government-schemes.html");
})
app.get("/about-us.html",function(req,res){
  res.sendFile(__dirname + "/about-us.html")
})
app.get("/bank-loan.html",function(req,res){
  res.sendFile(__dirname + "/bank-loan.html")
})
app.get("/index.html",function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.listen(3000,function(){
  console.log("server has satarte at port 3000");
})
