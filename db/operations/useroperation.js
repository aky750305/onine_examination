var Userst = require("../schema/userstudentsschema");
var Usert =require("../schema/userteachschema");
var dialog = require('dialog');

var userOperation = {
    addUsers(userObject,request,response){
     Userst.create(userObject,(err)=>{
         if(err){
            dialog.info('Something Wrong...');
             console.log(err);
         }
            else
            { response.render("dashboardst",{userName:userObject.userid});
        }
        })
    },
    addUsert(userObject,request,response){
        Usert.create(userObject,(err)=>{
            if(err){
                dialog.info('Something Wrong...');
                console.log(err);
            }          
               else
               {
               if(userObject.gender == 'female')
               response.render("dashboardt",{userName:userObject.userid+" Mam,"});
               else
               response.render("dashboardt",{userName:userObject.userid+" Sir,"});
            }
        })
    },
    fetchUser(userObject,request,response){
        Usert.findOne({'email':userObject.email,'password':userObject.password},(err,docs)=>{
            console.log("enterd");
            if(err){
                console.log(err)
            }
            else 
            if(docs){
                console.log(docs)
                if(docs.gender == 'female')
                response.render("dashboardt",{userName:docs.userid+" Mam,"});
                else
                response.render("dashboardt",{userName:docs.userid+" Sir,"});
                
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