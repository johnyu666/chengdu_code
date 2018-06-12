const mongoose=require('../model/book-model');
const Book=mongoose.model("book");

function findAllBooks(callback) {
    Book.find({},(err,books)=>{
        callback(books);
    })
}
function addBook(book,callback) {
    Book.insertMany(book,(err,bk)=>{
        callback(bk);
    })
}
function deleteBook(id,callback) {
    Book.remove({_id:id},(err,o)=>{
        callback(o);
    })
}
function updateBook(id,book,callback) {
    Book.update({_id:id},book,(err,raw)=>{
        Book.findById(id,(err,bk)=>{
            callback(bk);
        })
    })
}

exports.findAllBooks=findAllBooks;
exports.addBook=addBook;
exports.deleteBook=deleteBook;
exports.updateBook=updateBook;