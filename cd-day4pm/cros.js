module.exports=function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Method","PUT,POST,GET,PUT,OPTION");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
}