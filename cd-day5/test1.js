const mongoose=require('mongoose');
var bookSchema=new mongoose.Schema({bname:String,price:Number});
bookSchema.virtual("desc")
    .get(function () {
        return this.bname+","+this.price;
    })
    .set(function (de) {
        let tms=de.split(",");
        this.bname=tms[0];
        this.price=Number.parseFloat(tms[1]);

    });


mongoose.model("book",bookSchema);

let Book=mongoose.model("book");
let book=new Book({bname:'john',price:23.41});
let book1=new Book({desc:'john23,123.98'});

mongoose.connect("mongodb://localhost:27017/test3",(err)=>{
    if(!err){
        console.log("连接成功");
        // book.save((err,book)=>{
        //     console.log(book);
        //     mongoose.disconnect();
        // });

        // Book.findById("5b1f3cf73c7c470572bc8190",(err,book)=>{
        //     console.log(book);
        //     mongoose.disconnect();
        // })


        // Book.insertMany([{bname:'harry',price:123.45},{bname:'thiking in java',price:89.45}]
        //     ,(err,raw)=>{
        //         console.log(raw);
        //         mongoose.disconnect();
        //     });

        // Book.update({_id:"5b1f6ba0d2263505c5198e31"},{$inc:{price:10}},(err,raw)=>{
        //     console.log(raw);
        //     Book.findById("5b1f6ba0d2263505c5198e31",(err,o)=>{
        //         console.log(o);
        //         mongoose.disconnect();
        //     })
        //
        // })

        // Book.remove({_id:"5b1f6ba0d2263505c5198e31"},(err,o)=>{
        //     console.log(o);
        //     mongoose.disconnect();
        // });

        // Book.find({},(err,books)=>{
        //     console.log(books);
        //     mongoose.disconnect();
        // })

        // book1.save((err,bk)=>{
        //     console.log(bk);
        //     mongoose.disconnect();
        // })
        Book.findById("5b1f725235d40705d56f7548",(err,bk)=>{
            console.log(bk.desc);
            mongoose.disconnect();
        })


    }
})
