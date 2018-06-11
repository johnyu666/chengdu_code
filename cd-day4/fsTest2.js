const fs=require('fs');
// fs.mkdirSync("abc2");
// let fd=fs.openSync("abc2/a.txt",'w');
// fs.writeSync(fd,"hello world!");
// fs.closeSync(fd);


fs.mkdir("abc3",(err)=>{
    if(!err){
        fs.open("abc3/a.txt",'w',(err,fd)=>{
            fs.write(fd,"Hello world!",(err)=>{
                if(!err){
                    fs.close(fd,(err)=>{
                        if(!err){
                            console.log("任务完成！");
                        }
                    })
                }
            })
        })
    }
});
console.log("other work!!!");
