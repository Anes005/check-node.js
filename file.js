const fs = require("fs") 


fs.readFile("welcom.txt", (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})