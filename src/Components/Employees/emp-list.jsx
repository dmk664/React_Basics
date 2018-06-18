import React, { Component } from 'react';
import EmpDetails from './emp-details';
import {EmpForm } from './emp-form';

export default class EmpList  extends Component {

    constructor(props){
        super(props);
        this.state={
        
            employees:[

            {
                id: 1,
                Empno:'CLB123',
                Firstname:'Ram',
                Lastname:'krish',
                city:'Guntur'
            },
            {
                id: 2,
                Empno:'CLB234',
                Firstname:'Murali',
                Lastname:'krishna',
                city:'Guntur ' 
            },
            {
                id: 3,
                Empno:'CLB345',
                Firstname:'Krish',
                Lastname:'Ram',
                city:'Guntur'
            }
        ],
        latestid: 4,
        selectedEmployee:null

    };
}
addEmployee=(empobj)=>{
    {/*newEmployee.Empid=this.state.latestid*/}
    let newEmployee=Object.assign({},empobj,{id:this.state.latestid});
    let newList=[...this.state.employees,newEmployee];
    this.setState({
        employees:newList,
        latestid:this.state.latestid + 1
    });
}
showDetails = (selectedEmployee)=>{
    console.log(selectedEmployee);
    this.setState({
        selectedEmployee: selectedEmployee
    })
}
  render() {
      const title=<h3>List of Employees</h3>

      const empRows = this.state.employees.map(e =>{

       return(
              <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.Empno}</td>
              <td>{e.Firstname}</td>
              <td>{e.Lastname}</td>
              <td>{e.city}</td>
             
              <td>
              <button className="ui basic blue button" onClick={() => this.showDetails(e)}>Show Details</button>
              </td>
              
              </tr>

          )
      });
   
return(
    <div>{title}
    <table className="ui blue table striped">
    <thead>
        <tr>
             <th>id</th>
            <th> Empno</th>
            <th> Firstname</th>
            <th> Lastname</th>
            <th> city</th>
            <th> Actions</th>

        </tr>
        </thead>
        <tbody>
            {
                empRows
            }
        </tbody>
        </table>
        <div className="ui divided into two colom grid">
        <div className="row">
        <div className='colomn'>
        <EmpForm addEmployee={this.addEmployee}/>
        </div>
        <div className="colomn">
        
        {
            this.state.selectedEmployee && 
            <EmpDetails employees={this.state.selectedEmployee}/>
        }
              </div>
           </div>

        </div>
    </div>
       )
     }
}


