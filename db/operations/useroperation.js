var Users = require("../schema/userschema");
var dialog = require('dialog');

var userOperation = {
    addUsers(userObject,request,response){
     Users.create(userObject,(err)=>{
     if(err){
        dialog.info('Something Wrong...');
        console.log(err);
      }          
     else if(userObject.profession == 'Teacher')
      {
        if(userObject.gender == 'Female')
        response.render("dashboardt",{userName:userObject.userid+" Mam,"});
        else
        response.render("dashboardt",{userName:userObject.userid+" Sir,"});
      }
     else if(userObject.profession == 'Student')
      {
       response.render("dashboardst",{userName:userObject.userid});
      }
      else
      response.send("error try again later...")
     })
    },
    fetchUser(userObject,request,response){
        Users.findOne({'email':userObject.email,'password':userObject.password},(err,docs)=>{
            console.log("enterd");
            if(err){
                console.log(err)
            }
            else 
            if(docs.profession=='Teacher'){
                console.log(docs)
                if(docs.gender == 'Female')
                response.render("dashboardt",{userName:docs.userid+" Mam,"});
                else
                response.render("dashboardt",{userName:docs.userid+" Sir,"});          
            }
            else 
            if(docs.profession=='Student'){
                console.log(docs)
                response.render("dashboardst",{userName:docs.userid});           
            }
           else
           console.log("not found",docs)
        })     
    },
    updatenodeUser(userObject,request,response)
    {
       Userst.findOneAndUpdate({'email':userObject.email},{$set:{'password':'12345678aA'}},{upsert:true},(err,docs)=>{
         if(err){
          console.log("error");
         }
         else{
            dialog.info('PASSWORD CHANGED');     
         }
       })
           
    }
}
module.exports = userOperation;