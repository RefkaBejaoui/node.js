
const fs = require('fs') 
fs.writeFile('welcome.txt','Hello Node',(err)=> {
    //if (err) throw err
    if (err) {console.error(err)}
})
fs.readFile('welcome.txt',(err,data)=>{
    if(err) {console.error(err)}
    else {console.log(data.toString())}
})