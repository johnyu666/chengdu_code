const http=require('http');
let server=http.createServer();
server.on("request",(req,res)=>{
   console.log("one client");

   let headers=req.headers;
   console.log(req.url);
   //console.log(headers);
    req.on("data",(buf)=>{
       //console.log(buf.toString());
       res.write("<html><h1>hello</h1></html>")
       //res.write("ok!!!"+buf.toString()+"...."+req.url);
        res.end();

    })
    res.write("<html><h1>hello</h1></html>")

});
server.listen(9000,()=>{
    console.log("start server  "+server.address().port);
    //console.log(server.address());
});