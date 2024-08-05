console.log('HELLO WORLD')
const http = require('http')
const fs = require('fs')
const server = http.createServer((request,response)=>{
    response.end('<h1>Hello Node!!!!</h1>\n')
})

server.listen(3000,'localhost',()=>{
    console.log('server running on http://localhost:3000')
})

fs.writeFile("welcome.txt" , "Hello Node", (err)=>{
    if (err) {
        return console.error(err);  }
})

fs.readFile('welcome.txt',(err,data)=>{
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});
// var data = fs.readFileSync('welcome.txt');
// console.log("Synchronous read: " + data.toString());

