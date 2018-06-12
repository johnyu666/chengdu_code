const app=require('../app');
const mongoose=require('../model/book-model');
const conf=require('./conf');

mongoose.connect(conf.mongo,(err)=>{
    if(!err){
        console.log("db connect success!!!");
        app.listen(conf.expressPort,(err)=>{
            if(!err){
                console.log("express start at "+conf.expressPort);
            }
        })
    }
})
