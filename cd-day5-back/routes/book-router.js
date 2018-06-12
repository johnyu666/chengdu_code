const express=require('express');

const bookDao=require('../dao/book-dao');
const router=express.Router();


router.route("/")
.get((req,res)=>{
    bookDao.findAllBooks((books)=>{
        res.json(books);
    });

})
.post((req,res)=>{
    let book=req.body;
    bookDao.addBook(book,(bk)=>{
        res.json(bk);
    })
});

router.route("/:id")
.delete((req,res)=>{
    bookDao.deleteBook(req.params.id,(o)=>{
        res.json({});
    })
})
.put((req,res)=>{
    let id=req.params.id;
    let book=req.body;
    bookDao.updateBook(id,book,(bk)=>{
        res.json(bk);
    })
});

module.exports=router;