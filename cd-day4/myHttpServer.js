const http=require('http');
const url=require('url');
const fs=require('fs');
let server=http.createServer();
server.on("request",(req,res)=>{
    let path="public"+url.parse(req.url).pathname;
    fs.createReadStream(path).pipe(res);
})
server.listen(9000,()=>{
    console.log("server start at port :"+server.address().port);
})
