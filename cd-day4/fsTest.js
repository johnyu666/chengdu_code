const fs=require("fs");

let buf=fs.readFileSync("test1.js");
console.log(buf.toString());
fs.readFile("test19.js","UTF-8",(err,buf)=>{
    if(!err) {
        console.log(buf);
    }
    else{
        console.log(err);
    }
})



