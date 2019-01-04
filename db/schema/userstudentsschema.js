var mongoose =require('../connections/userconnection');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
        'userid':{type :String, required:true},
        'password':{type:String, required:true},
        'email':{type:String,  required:true, unique:true},
        'gender':{type:String, required:true},
        'professional':{type:String, required:true}
    })
    var UserModels = mongoose.model("students",UserSchema);
module.exports = UserModels;