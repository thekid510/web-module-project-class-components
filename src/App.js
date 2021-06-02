import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state = {
      toDo: ["take out the garbage",
       "do the laundry",
       "finish homework"],
      
    }
    handleChange = (e)=> {
      this.setState({ 
        toDo: e.target.value 
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
    }
  render() {
    return (<div className = "App">
        <h2>Welcome to your Todo App!</h2>
      <form onSubmit = {this.handleSubmit}>
      <input onChange={this.handleChange}/>
      <button> Enter</button>    
      <button> Clear To Do List </button>
      </form>
      <h2>{this.state.toDo}</h2>
   </div>);
  }
}
export default App;

