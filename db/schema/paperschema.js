var mongoose =require('../connections/userconnection');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    'question':{type :String, required:true},
    'option1':{type:String, required:true},
    'option2':{type:String,  required:true},
    'option3':{type:String, required:true},
    'option4':{type:String, required:true},
    'answer':{type:String, required:true}
})
var UserModels = mongoose.model("paper1",UserSchema);
module.exports = UserModels;