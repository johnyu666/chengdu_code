import React from 'react';
import ReactDOM from 'react-dom';
import AddBookForm from './books/add-book.js'
import UpdateBookForm from './books/update-book';

import $ from 'jquery';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={books:[]};
        this.addBook=this.addBook.bind(this);
        this.updateBook=this.updateBook.bind(this);
    }
    render(){
        return (<div id="wraper">
            <AddBookForm callback={this.addBook}/>
            <div id="bookList">
                <table>
                    <thead>
                    <tr>
                        <th>bookID</th>
                        <th>bookName</th>
                        <th>Price</th>
                        <th>operate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.books.map((book)=>{
                        return (<tr key={book._id} onDoubleClick={()=>{this.dbclickHandle(book)}}>
                            <td>{book.id}</td>
                            <td>{book.bname}</td>
                            <td>{book.price}</td>
                            <td>
                                <button onClick={()=>{this.deletBook(book)}}>删除</button>
                            </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>

            <UpdateBookForm callback={this.updateBook} ref={(me)=>{this.upform=me}}/>

        </div>);
    }

    componentDidMount(){
        $.ajax({url:this.props.url,method:"GET"})
            .done((bks)=>{
                this.setState({books:bks});
            })
    }

    addBook(bk){
        let opt={url:this.props.url,method:"POST"};
        opt.contentType="application/json";
        opt.data=JSON.stringify(bk);

        $.ajax(opt)
            .done((book)=>{
                this.state.books.push(book[0]);
                this.setState({books:this.state.books});
            })
    }

    deletBook(book){
       $.ajax({url:this.props.url+book._id,method:"DELETE"})
           .done((o)=>{
               let index=this.state.books.indexOf(book);
                this.state.books.splice(index,1);
                this.setState({books:this.state.books});
           })
    }


    dbclickHandle(book){
         this.currentBook=book;
        // this.setState({bname:book.bname,price:book.price});
        this.upform.setState({bname:this.currentBook.bname,price:this.currentBook.price});
    }
    updateBook(bk){

        let opt={url:this.props.url+this.currentBook._id,method:"PUT"};
        opt.contentType="application/json";
       // opt.data=JSON.stringify({_id:this.currentBook._id,bname:this.state.bname,price:this.state.price});
       bk._id=this.currentBook._id;
        opt.data=JSON.stringify(bk);
        $.ajax(opt)
            .done((book)=>{
                let index=this.state.books.indexOf(this.currentBook);
                this.state.books.splice(index,1,book);
                this.setState({books:this.state.books});
            })
    }

}
ReactDOM.render(<App url="http://localhost:9000/books/"/>,document.getElementById("root"));