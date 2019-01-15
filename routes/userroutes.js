const express = require("express");
var chokidar = require('chokidar');
const userOperation = require("../db/operations/useroperation");
const paperOperation = require("../db/operations/paperoperation");
const nodeMail = require('../utils/nodemailer');
const exceltojson = require('../utils/exceltojson');
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

userRoute.post('/registers',(request,response)=>{
    var userObject ={
        'userid' : request.body.userid,
        'password' : request.body.password,
        'email' : request.body.email,
        'gender' : request.body.gender,
        'profession' :request.body.profession
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
});

userRoute.post('/upload',(request, response)=> {
    paperOperation.uploadTest(request,response);
    var watcher = chokidar.watch('routes/uploads', {ignored: /^\./, persistent: true});
    watcher
    .on('add', function(path) {console.log('File fsafsa', path, 'has been added');
    exceltojson.excel(path,response);
  })
    .on('error', function(error) {console.error('Error happened', error);})
    console.log(JSON.stringify(output.json));
});
    
userRoute.post('/alltest',(request,response)=>{
    console.log("pass userroute");
    paperOperation.fetchPprs(request,response);
});


module.exports = userRoute;