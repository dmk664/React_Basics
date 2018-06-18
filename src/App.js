import React, { Component } from 'react';
import TodoList from './Components/todos/todos-list';
import EmpList from './Components/Employees/emp-list';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        
          <h1 className="App-title">Welcome to React</h1>
      {/*<Todoitem/>
        <Counter initialCount={567}/>*/}
              <TodoList/>
        <EmpList/>
        </div>
    );
  }
}

export default App;
