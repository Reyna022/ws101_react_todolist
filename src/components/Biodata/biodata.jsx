import React from 'react'
import './biodata.css';
function biodata(props)  {
    return (
        <div className ='biodata'>
            <h1 id='heading'>My Biodata</h1>
            <hr/>
            <br />
            <p><strong>Name: </strong>{props.name} {props.lastname}</p>
            <br />
            <p><strong>Mobile No: </strong>{props.Mobile}</p>
            <br />
            <p><strong>Email Add: </strong>{props.Email}</p>
            <br />
            <p><strong>Gender: </strong>{props.Gender}</p>
            <br />
            <p><strong>Birthdate: </strong>{props.Birthdate}</p>
            <br />
            <p><strong>Father's Name: </strong>{props.Father}</p>
            <br />
            <p><strong>Mother's Name: </strong>{props.Mother}</p>
            <hr />
            <br />
            <p><strong>Education</strong>{props.Education} <br /><br />
            <strong>High School:</strong>Recto Memorial National High School <br /><br />
            <strong>College:</strong> Dalubhasaan ng Lungsod ng Lucena Isabang,</p>
       
        </div>
    );
}

export default biodata;