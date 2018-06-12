const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({bname:String,price:Number});
mongoose.model("book",bookSchema);

module.exports=mongoose;
