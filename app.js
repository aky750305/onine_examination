const express = require("express");
const app =express();
const bodyParser = require("body-parser");
var dialog = require('dialog');
const nodemailer = require("nodemailer");
const userRoute = require("./routes/userroutes");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use('/',userRoute);
app.listen(process.env.PORT||3000,()=>{
    console.log("server start...")
})