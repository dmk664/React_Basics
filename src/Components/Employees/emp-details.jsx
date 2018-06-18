import React, { Component } from 'react'

 function EmpDetails(props)  {
   
    return (
    <div className="ui card">
    <div className="content">    
    <div className="header">
    </div>
    <div className = "description">

        <h3>Empoyee Details with Id: {props.employees.id} </h3>
        <p><strong>Emp No : </strong>{props.employees.Empno}</p>
        <p><strong>Firstname : </strong>{props.employees.Firstname}</p>
        <p><strong>Lastname : </strong>{props.employees.Lastname}</p>
        <p><strong>city: </strong>{props.employees.city}</p>
        
    </div>
     </div>
    </div>
    )
  }

export default EmpDetails;