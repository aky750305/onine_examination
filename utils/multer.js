multers = require('multer');
const path = require("path");
var multerConf = {
    storage: multers.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./routes/uploads');
    },
    filename: function (req,file,cb){
        console.log("file",file);
        cb(null,file.originalname);
    }
}),
fileFilter: function(req,file,cb){
    console.log("file is ",file);
    var ext = path.extname(file.originalname);
        if(ext !== '.xls' && ext !== '.xlsx' && ext !== '.xlsm' && ext !== '.xlt') {
            return cb(new Error('Only xls are allowed'))
    }
    else{
        return cb(null,true);
    }
}
}
module.exports = multerConf;