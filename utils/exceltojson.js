xlstojson = require("xls-to-json-lc");
var exceltojson = {
 excel(excelpath,response){
  console.log(excelpath);
  xlstojson({
    input: excelpath,  // input xls
    output: "output.json", // output json
    sheet: "Sheet1",  // specific sheetname
    lowerCaseHeaders:true
  }, function result(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log("dd",result);
     return result;
    }
  })
}
}
 module.exports = exceltojson;

  
  
 