import React, { Component } from "react";
import ReactDOM from 'react-dom';
import data from "../Component/data.json";
import { SocialIcon } from 'react-social-icons';
import "./Header.css"
class Header extends Component{
  constructor(){
    super()
    this.state={
      color:"yellow"
    }
  }
  Magic(){
    this.setState({
      color:this.state.color==="pink"?"yellow":"pink"
    })
  }
    render(){
        return(
         
        
  <div id="h" className=" section" style={{backgroundColor:this.state.color }}>
    
        
          <div className="flexItem">
            <div>
           <button id="About" className="btn btn-outline-primary"><a href="#ab">About</a></button>
          <button id="Skills" className="btn btn-outline-primary"><a href="#card">skills</a></button>
          <button id="Magic" className="btn btn-outline-primary" onClick={()=>{
              this.Magic()
          }}>Magic</button>
            </div>
     
            <h1>{data.mainContent.title}</h1>
            <h3>
              <a href="#">{data.mainContent.subtitile[0]}</a>
              <a href="#">{data.mainContent.subtitile[1]}</a>
              <a href="#">{data.mainContent.subtitile[2]}</a>
            </h3>

            <div>
              {Object.keys(data.mainContent.link).map((social)=>{
                console.log(social)
                return(
                     <SocialIcon url={data.mainContent.link[social]} style={{margin:"10px"}}/>               
                )
             
              })}
            </div>
            <div>
        <a href="#ab"><img id="jumpDown" src="image/down.png" style={{maxWidth:"30px"}}></img></a>
   
            </div>
          </div>
        </div>
           
        )
    }
}
export default Header