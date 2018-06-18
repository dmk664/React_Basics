import React, { Component } from 'react'
import {PropTypes} from 'prop-types';

export class EmpForm extends Component {
    
     constructor(props){
         super(props);
         this.state={

             id:'',
             Empno:'',
             Firstname:'',
             Lastname:'',
             city:''
         }
     }
     handlChange=(evt)=>{
         this.setState({
             [evt.target.name]:evt.target.value
         })
     }
     resetForm=()=>{
         this.setState({
             id:'',
             Empno:'',
             Firstname:'',
             Lastname:'',
             city:''
         })
     }
     handleSubmit=(evt)=>{
         evt.preventDefault();

         console.log(this.state);
         this.props.addEmployee(this.state);
         this.resetForm();
     }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
        <label>id </label>
         <input type="text"  name="id"
            value={this.state.id}
            onChange={this.handlChange}/>
        </div>
        
      <div className="field">
        <label>Empno </label>
         <input type="text" name="Empno"
            value={this.state.Empno}
            onChange={this.handlChange}/>
        </div>
        <div className="field">
        <label>Firstname </label>
        <input type="text" name="Firstname"
               value={this.state.Firstname}
             onChange={this.handlChange}/>
        </div>
            <div className="field">
      <label>Lastname </label>
      <input type="text" name="Lastname"
            value={this.state.Lastname}
            onChange={this.handlChange}/>
            </div>

        <div className="field">
      <label>City </label>
      <input type="text" name="city"
            value={this.state.city}
            onChange={this.handlChange}/>
            </div>
      
      <button className="ui blue basic button">Add Employee</button>
      </form>
    )
  }
}
EmpForm.propTypes={
    addEmployee:PropTypes.func.isRequired
}