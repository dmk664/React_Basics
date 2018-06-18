import React,{Component} from 'react';

 class Todoitem extends Component{
     handleDelete = () =>{
         this.props.deleteTodo(this.props.todo.id);

     }
    render(){
        return(
            <div>
                <button className="ui red basic button onClick={this.handleDelete}>">Delete</button>
                <span>{this.props.todo.id},{this.props.todo.text}
                </span>
                </div>
           //<h3>
           // {this.props.todo.id}-{this.props.todo.text}
            //</h3>
        )
    }

}
export default Todoitem;