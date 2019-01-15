const nodemailer = require('nodemailer');
var dialog = require('dialog');
var nodeMail ={
    configMail(userObject,response){
        var userObject=JSON.stringify(userObject);
        nodemailer.createTestAccount((err,account)=>{
            let transporter = nodemailer.createTransport({
                service:'gmail',
                secure:false,
                port:25,
                auth:{
                    user:'aky7503051815@gmail.com',
                    pass:'@Ky7503051815ky'
                },
                tls:{
                    rejectUnauthorized:false
                }
            })
            let mailOptions ={
                from:'aky7503051815@gmail.com',
                to: userObject,
                subject:"classmate.com",
                text:'your login password is 12345678aA'
            };
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("not send",error);
                }
                else{
                    console.log("ds",info);
                }
            });
        })
    }
}
   
module.exports = nodeMail;