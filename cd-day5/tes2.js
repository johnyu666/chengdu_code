const mongoose=require('mongoose');

let departSchema=new mongoose.Schema({dname:String});
let Depart=mongoose.model("depart",departSchema);
let userSchema=new mongoose.Schema({uname:String,
    depart:{type:mongoose.Schema.Types.ObjectId,ref:'depart'}});

let User =mongoose.model('user',userSchema);

let depart=new Depart({dname:'sales'});
mongoose.connect("mongodb://localhost:27017/test3",(err)=>{
   if(!err){
       // depart.save((err,d)=>{
       //     console.log(d);
       //     mongoose.disconnect();
       // })
       // Depart.findById("5b1f75a4d7c23505e21671fb",(err,d)=>{
       //     let u=new User({uname:"johnny",depart:d});
       //     u.save((err,u1)=>{
       //         console.log(u1);
       //         mongoose.disconnect();
       //     })
       // })

       User.find({_id:"5b1f760b6734fa05e36f59b1"})
           .populate('depart')
           .exec((err,u)=>{
               u.forEach((t)=>{
                   console.log(t.depart.dname);
               })

               mongoose.disconnect();
           })
   }
});


