const express = require("express");
const fs = require("fs");
const userOperation = require("../db/operations/useroperation");
const paperOperation = require("../db/operations/paperoperation");
const nodeMail = require('../utils/nodemailer');
const userRoute = express.Router();

userRoute.post('/',(request,response)=>{
    response.sendFile("./public/index.html");
});


userRoute.post('/logins',(request,response)=>{
    email = request.body.email;
    password = request.body.password;
      var userObject ={
        'email': email,
        'password': password  
    }
userOperation.fetchUser(userObject,request,response);
});

userRoute.post('/registert',(request,response)=>{
    var userObject ={
        'userid' : request.body.userid,
        'password' : request.body.password,
        'email' : request.body.email,
        'gender' : request.body.gender,
        'professional' :'teachers'
    }
    userOperation.addUsert(userObject,request,response);
});

userRoute.post('/registers',(request,response)=>{
    var userObject ={
        'userid' : request.body.userid,
        'password' : request.body.password,
        'email' : request.body.email,
        'gender' : request.body.gender,
        'professional' :'students'
    }
    userOperation.addUsers(userObject,request,response);
});

userRoute.post('/forgetpassword',(request,response)=>{
    const userObject = {
        email:request.body.email
    }
 nodeMail.configMail(userObject,response);
 userOperation.updatenodeUser(userObject,request,response);
 response.sendfile("./public/index.html");
});


userRoute.post('/chngepss',(request,response)=>{
    var email = request.body.email;
    var npassword = request.body.npassword;
    var ncpassword = request.body.ncpassword;
    var userObject = {
        'password':npassword,
        'email':email,
    }
    if(npassword == ncpassword)
    {
        console.log("",userObject.password);
        userOperation.updateUser(userObject,request,response);
        userOperation.fetchUser(userObject,request,response);
    }
    else{
        response.send("New Password and Conform Password is not same...");
    }
})

userRoute.post('/addTest',(request,response)=>{
    var adTest = request.body.adtest;   
    exceltojson.excel(adTest,response);
    let result = fs.readFileSync('./output.json');
    let output = JSON.parse(result);
    console.log(result);
    output.forEach(function(value){
        var questions ={
          question:value.question,
          opt1:value.opt1,
          opt2:value.opt2,
          opt3:value.opt3,
          opt4:value.opt4,
          ans:value.ans,
        }
        pprOperation.addPpr(questions,request,response);
        console.log(questions);
      });
    });
    userRoute.post('/alltest',(request,response)=>{
        console.log("pass userroute");
        paperOperation.fetchPprs(request,response);
    });


module.exports = userRoute;