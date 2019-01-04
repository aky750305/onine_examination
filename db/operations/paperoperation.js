const mongoose = require("mongoose");
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
        else {
        console.log("lists");
        names.forEach(function(nameColl){
         if((nameColl.name!= 'teachers') && (nameColl.name!= 'students'))
         console.log(nameColl.name)
         })
        }        
      mongoose.connection.close();
      });
      });
    }
}
module.exports = paperOperation;