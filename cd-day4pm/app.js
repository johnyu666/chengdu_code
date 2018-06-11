const express=require('express');
const http=require('http');
const path=require('path');
const bodyParser=require('body-parser');

const router=require('./book-router');
//全Restful方案的后台（new webservice /SOA===IAAS/PAAS/SAAS/TAAS）
let app=express();
//request body is json
app.use(bodyParser.json());
//url-form-encoded --name=xx&age=12;
//app.use(bodyParser.urlencoded({extend:true}));
app.use(require('./cros'));
app.get("/",(req,res)=>{
    res.send("index!!!");
});

app.use("/books",router);



let server=http.createServer(app);
server.listen(9000,()=>{
    console.log("express server start  at :"+server.address().port);
})