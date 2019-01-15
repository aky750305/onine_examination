const mongoose = require("mongoose");
const multer = require('multer'); 
const multerConf = require('../../utils/multer');
var Paper =require("../schema/paperschema");
var dialog = require('dialog');

var paperOperation = {
  fetchPpr(questions){
    Paper.find({'question':questions.question},(err,docs)=>{
      if(err){
        console.log("Error During Fetch");
      }
      else{
        if(docs && docs.length>0){
          console.log("record Found....",docs[0]);
        }
        else{
          console.log("Invalid Userid or Password");
        }
      }
    })
  },
  fetchPprs(request,response){
    console.log("inside fetch");
    mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true })
    mongoose.connection.on('open', function () {
      mongoose. connection.db.listCollections().toArray(function (err, names) {
        if (err) {
        console.log(err);
        } 
        else 
        {
         i=0;
         var all = new Array();
         names.forEach(function(nameColl){
        // if((nameColl.name!= 'teachers') && (nameColl.name!= 'students'))
         if(nameColl.name!= 'usersts')
         all[i]=nameColl.name;
        // console.log(nameColl.name)
         i++;
         })
        }
         var all = all.filter(function (el) {
         return el != null;
        }); 
        //console.log(all);   
        var my = JSON.stringify(all); 
        //console.log(my) 
        response.render("papers",{papers:my});
      mongoose.connection.close();
      });
    
      }); 
     },
     uploadTest(request,response){
      var upload = multer(multerConf).single('photo');
      upload(request, response, function (err) {
        if (err instanceof multer.MulterError) {
          response.send("yess")
        } else if (err) {
         response.send("noooo")
         console.log(err)
        }
        else{
          response.send("fine"); 
        }  
      })
     },
     addTest(json,request,response){
      
     }
}
module.exports = paperOperation;