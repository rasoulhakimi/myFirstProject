//import React from "react";
import logo from "./logo.svg";
import ReactDOM from 'react-dom';
import "./App.css";
import data from "./Component/data.json";
import React, { Component } from "react";

import { SocialIcons } from "react-social-icons";
import { render } from "@testing-library/react";
import bootstrap from "react-bootstrap";
import bts from "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Component/Header.js";
import About from "./Component/About.js";
import Card from "./Component/Card";
class App extends Component {
  render() {
    return (
      <div>
      
        {/* section header */}
        <Header />
        {/* section about */}
        <About />
        {/* section card */}
        { <Card/> }
        
      </div>
    );
  }
}

export default App;
