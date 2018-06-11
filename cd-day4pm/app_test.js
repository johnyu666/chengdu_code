const express=require('express');
const http=require('http');
const path=require('path');
//全Restful方案的后台（new webservice /SOA===IAAS/PAAS/SAAS/TAAS）
let app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.send("get /")
    res.end("!");
});

app.get("/users",(req,res)=>{
    res.render("allUsers",{uname:"john"})
})
app.post("/",(req,res)=>{
    res.send("post /")
})
let server=http.createServer(app);
server.listen(9000,()=>{
    console.log("express server start  at :"+server.address().port);
})