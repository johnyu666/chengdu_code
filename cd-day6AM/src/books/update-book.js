import React from 'react';

export default class UpdateBookForm extends React.Component{
    constructor(props){
        super(props);
        this.state={bname:"",price:""};
    }
    render(){
        return (
            <div id="updateBookPan">
                <form action="#" onSubmit={(e)=>{this.updateBook(e)}}>

                    <input name="bname" type="text" value={this.state.bname} onChange={(e)=>{this.changeHandle(e)}}/>
                    <input name="price" type="text" value={this.state.price} onChange={(e)=>{this.changeHandle(e)}}/>
                    <input type="submit"/>
                </form>

            </div>
        );
    }
    changeHandle(e){
        this.setState({[e.target.name]:e.target.value});
    }
    updateBook(e){
        e.preventDefault();
        this.props.callback({bname:this.state.bname,price:this.state.price});
    }
}