const fs=require("fs");
const stream=require('stream');
//stream.Writable;
let input=fs.createReadStream("test1.js");
let out=fs.createWriteStream("zdata1.txt");
input.on("close",()=>{
    console.log("输入关闭");
})
out.on("close",()=>{
    console.log("输出关闭")
})
input.pipe(out);

//process.stdin.pipe(process.stdout);

//console.log(out instanceof stream.Writable);
// out.write("abc");


// input.on("data",(buf)=>{
//     out.write(buf,(err)=>{
//         if(!err){
//             console.log("完成");
//             input.close(()=>{
//                 out.close();
//             })
//         }
//     })
//
// })
