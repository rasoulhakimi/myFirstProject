import React, { Component } from "react";
import "./Header.css"
import data from "../Component/data.json";
import "./About.css"
class About extends Component {
  render() {
    return (
      <div id="ab" className={`containerAbout ${this.props.className}`}>
        <div className="containerAbout section">
          <h1>{data.about}</h1>
          <h4>{data.aboutTitle}</h4>
          <div>
              <a href="#card"><img id="jumpDown" src="image/down.png" style={{maxWidth:"30px"}}></img></a>
            </div>
        </div>
        
      </div>
    );
  }
}
export default About;
