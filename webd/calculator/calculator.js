const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmicalculator",function(req, res){

  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = weight/ (height*height);


  res.send("Your BMI is "+ result);
});

app.listen(3000,function () {
  console.log("Server Started at Port 3000");
});
