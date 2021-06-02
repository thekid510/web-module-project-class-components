import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state = {
      toDo:"",
      
    }
    handleChange = (e)=> {
      this.setState({ 
        toDo: e.target.value 
      })
    }
    handleSubmit = (e) => {
      e.preventDefault()
      this.setState({
        toDo: e.target.value
      })
    }
  render() {
    return (<div className = "App">
        <h2>Welcome to your Todo App!</h2>
        <h1>To Do List</h1>
        <p>{this.state.value}</p>
      <form onSubmit = {this.handleSubmit}>
        <input placeholder="enter task" onChange={e => this.setState({value: e.target.value})}/>
        <button onClick={() => this.setState({value: this.state.value})}> Enter</button>    
        <button> Clear To Do List </button>
      </form>
   </div>);
  }
}
export default App;

