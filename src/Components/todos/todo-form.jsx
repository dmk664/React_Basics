import React,{Component} from'react';

 class  TodoForm extends Component{
     state={
         newTodoText:''
     }
     handleChange=(evt) => {
         this.setState({
             newTodoText:''
         })
         this.handleSubmit=(evt)=>{
             evt.preventDefault();
             console.log(this.state.newTodoText);
             this.props.addTodo(this.newTodoText);
             this.setState({
                 newTodoText:''
             });
         }
     }

    }