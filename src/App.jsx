import {Component} from "react";


class App extends Component {
  constructor(){
    super();
    this.state={count:0}
  }
handleInc =()=> {
  this.setState({count: this.state.count+1});
}
handleDec =()=> {
  this.setState({count: this.state.count-1});
}  
  render(){
    return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {this.state.count}</p>
      <button onClick={this.handleInc}>Increment</button>
      <button onClick={this.handleDec}>Decrement</button>

     
    </div>
  );}
  
}

export default App;
