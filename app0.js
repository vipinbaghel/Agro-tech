const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https";)
const app = express();
app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}))
app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
})
app.post("/",function(req,res){
  const fName=req.body.firstName;
  const lName = req.body.laName;
  const em = req.body.email;
  const data = {
    members: [
      {
        email_address: em,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data)

})

app.listen(3000,function(){
  console.log("server is running on port 3000");
})


//api key
// 8069e0fcbfd5db70cd38e3019370380c-us2
//list id
//7b0a09d33c
