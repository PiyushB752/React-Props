import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";
import Props from "./components/DataComponent";

export default class AppClass extends Component {
  
  render(){
    const i = Props()
    return(
      <div className="app">
      <h1>Kalvium gallary</h1>
      <div className='imgContainer'>
      {
        i.map((images)=>(
          <img src={images.img} />
        ))
      }
      </div>
    </div>
    )
  }
}
