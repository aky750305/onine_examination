var mongoose =require('../connections/userconnection');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    'userid':{type :String, required:true},
    'password':{type:String, required:true},
    'email':{type:String,  required:true, unique:true},
    'gender':{type:String, required:true},
    'profession':{type:String, required:true}
})
var UserModel = mongoose.model("userst",UserSchema);
module.exports = UserModel;