const express=require('express');
const bodyParser=require('body-parser');
const logger=require('morgan');

const bookRouter=require("./routes/book-router");

const app=express();

app.use(logger());
app.use(bodyParser.json());
app.use(require('./middleware/cros'));
app.get("/",(req,res)=>{
    res.end("test.....");
});
app.use("/books",bookRouter);
module.exports=app;