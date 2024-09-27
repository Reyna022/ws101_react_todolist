import React from 'react'
import './navbar.css';
function Navbar (props)  {
    return (
        <div id ='navbar'>
            <h1>this is nav bar</h1>
            <h3>ny name is {props.name} {props.lastname}</h3>
        </div>
    )
}

export default Navbar