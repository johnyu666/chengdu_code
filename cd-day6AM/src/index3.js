import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
let user={uname:"tom",age:23};
class App extends React.Component{
    render(){
        return (<h1>hello {this.props.user.uname},{this.props.user.age}!!!</h1>);
    }
}
window.onload=function () {

    ReactDOM.render( (<div>
        <App user={user}/>
        <App user={{uname:"john",age:100}}/>
    </div>), document.getElementById("root"));
}
