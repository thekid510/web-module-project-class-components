import React from 'react';

class App extends React.Component {
  state = {
      toDo:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChange = (e)=> {
    this.state({
      toDo: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <h1>To Do List</h1>
        <li>Take Out The Trash</li>
        <li>Do my laundry</li>
        <li>Finish school work</li>
        <p>{this.state.value}</p>
        <form onSubmit = {this.onSubmit}>
          <input placeholder="enter task" onChange={e => this.state({value: e.target})}/>
          <button onClick={() => this.state({value: this.state.value})}>Enter</button>
          <button> Clear</button>
        </form>
      </div>
    );
  }
}

export default App;
