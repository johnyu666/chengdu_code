import React from 'react';


export default class AddBookForm extends React.Component{
    render(){
       return (<div id="addBookPan">
           <form action="#" onSubmit={(e)=>{this.submitHandle(e)}}>
               <input type="text" ref={(me)=>{this.bname=me}}/>
               <input type="number" step="0.5" ref={(me)=>{this.price=me}}/>
               <input type="submit"/>
           </form>
       </div>);
    }
    submitHandle(e){
        e.preventDefault();

        let book={bname:this.bname.value,price:this.price.value};

         this.props.callback(book);
    }
}