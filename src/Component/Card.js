import React from "react";
import react, { Component } from "react";
import data from "./data.json";
import "./Card.css";
import bts from "bootstrap/dist/css/bootstrap.min.css";
class Card extends Component {
  render() {
    return (
      
      <div id="card" className="containerCard section ">
       
        {data.secondContent.map((item) => {
          return (
            
            <div className="card">
              <img
                className="card-img-top"
                src={item.card.cardImage}
                alt="card-header"
              style={{height:"225px"}}/>
              <h2 className="card-tilte">{item.card.cardTitle}</h2>
              <div className="card-body">
                
                <h6 className="card-text">{item.card.cardbody}</h6>
               <a href={item.card.cardFooterLink} className="card-link"> <button className="btn btn-outline-info">more...</button></a>
              </div>
            </div>
          );
        })}
        <button id="uptop" className="btn "><a href="#h"><img  src="image/up.png" style={{maxWidth:"40px"}}></img></a></button>
      </div>
    );
  }
}

export default Card;
