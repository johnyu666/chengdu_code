import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={dv:new Date()};
    }
    componentDidMount(){
        this.fd=setInterval(()=>{
            //this.state.dv=new Date();
            this.setState({dv:new Date()});
        },1000);
    }
    componentWillUnmount(){
        clearInterval(fd);
    }

    render(){
        let format=this.props.format;
        let rs=this.state.dv.toLocaleString()
        if(format=="ISO"){
            rs=this.state.dv.toISOString();
        }

        return (<div>
            <h3>{rs}</h3>
            <button onClick={()=>{clearInterval(this.fd)}}>stop</button>
        </div>)
    }
}

class App extends React.Component{
    render(){
        return (<div><Clock format="ISO"/><Clock/></div>);
    }
}


    ReactDOM.render( <App/>, document.getElementById("root"));

