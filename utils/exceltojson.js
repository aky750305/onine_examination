xlstojson = require("xls-to-json-lc");
var Paper =require("../db/schema/paperschema");
var exceltojson = {
 excel(excelpath,response){
  console.log(excelpath);
  xlstojson({
    input: excelpath,  // input xls
    output: "output", // output json
    sheet: "Sheet1",  // specific sheetname
    lowerCaseHeaders:true
  }, 
   function result(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log("dd",result);
      result.forEach((question) => {
          Paper.create(question,(err)=>{
            if(err)
            {
              console.log(err)
            }
            else{
              console.log("done");
            }
          })
      });
     return result;
    }
  })

}
}
 module.exports = exceltojson;

  
  
 