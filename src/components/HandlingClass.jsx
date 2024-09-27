import { Component } from "react";
class HandlingClass extends Component{
    handleclass(){
        console.log('I am the Class!')
    }
    render(){
        return(
        <>
        <h1> this is how to handle events in a class components</h1>
        <button onClick={this.handleclass}> click me now </button>
        </>
        )
    }
}

export default HandlingClass;