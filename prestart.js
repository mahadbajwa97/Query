
var {convertFromPostmanToSwagger} = require("./apidocs/api.transformer")

convertFromPostmanToSwagger("./apidocs/snapthat.postman_collection.json",'./apidocs/swagger.json')
.then((res)=>{
  //console.log("conversion: ",res)
  
}).catch((err)=>{
    console.log(err)
})