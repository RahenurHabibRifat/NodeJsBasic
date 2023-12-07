/*
const http = require('http');

http.createServer((req,res)=>{
    res.end("<h1>Hello Rifat, Iam your first Server.</h1>");
}).listen(3000);
*/
/*
const http = require('http');
const myServer = http.createServer((req,res)=>{
    res.end("<h1>Hello Rifat, Iam Your First Server.</h1>");
});

myServer.listen(3000,()=>{
    console.log("Server is running successfully at localhost: 3000");
});
*/

const http = require('http');
const port = 3000;
const hostName = '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    res.end("<h1>Hello Rifat, Iam your first server.</h1>");
});

myServer.listen(port,hostName,()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
});