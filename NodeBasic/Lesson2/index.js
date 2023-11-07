const fs = require('fs');
/*
//Write a file and Create this file....
fs.writeFile('day1.txt',"My name is Rifat.",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Successful");
    }
});
*/

/*
//Append this file
fs.appendFile('day1.txt'," I am 21 years old.", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Successful");
    }
});
*/

/*
fs.readFile('day1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/

/*
//Reaname this folder or text file
fs.rename('day1.txt','day2.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Successfull.");
    }
});
*/

/*
//Delete this file
fs.unlink('day2.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Successfully Deleted");
    }
});
*/

//Exist or not exist this file
fs.exists('day2.txt',(result)=>{
    if(result){
        console.log("Found");
    }else{
        console.log("Not Found");
    }
});