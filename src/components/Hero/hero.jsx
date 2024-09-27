import { Component } from 'react';
import React from 'react'
import './hero.css';


class Hero extends Component{
    render(){

    return <h3>message:{ this.props.message}</h3>
    }

}
export default Hero;