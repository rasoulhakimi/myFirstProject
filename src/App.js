//import React from "react";
import logo from "./logo.svg";
import "./App.css";
import React ,{Component} from "react";
import Fc from "./Component/Fc";
class App extends Component{
  constructor(props){
    super(props);
  this.state={
     time:new Date()
  }}
  componentDidMount(){
    setInterval(()=>this.tick(),1000)
  }
  tick(){
    this.setState({
      time:new Date()
    })
  }
  toggle(){
    if(this.state.pause){
      setInterval(()=>this.tick(),1000)
      this.setState({
        pause:false
      })
    }
  }
  render(){
    return(
    <div>tim is :{this.state.time.toLocaleTimeString()}
    <button value='stop' onClick={()=>this.toggle()}></button>
    </div>
    )
  }
}

export default App;
