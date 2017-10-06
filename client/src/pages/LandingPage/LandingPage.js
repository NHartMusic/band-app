import React, { Component } from 'react';
import Login from "../../components/Login/Login";
import "./LandingPage.css";

class Landing extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  goSearchForMusic = (e) => {
    e.preventDefault();
    window.location.pathname = "/music-options";
  }

  render(){
    return(
      <div id="intro_page">
        <h1>GigHub</h1>
        <p className="intro_text">A social media platform for bands</p>
        <img src={require("../../gigHubLogo.png")}
             alt="music icon"
             id="music_icon"/>
        <div className="row">
        <div className="col-md-6">
          <button id="user_button"
          onClick={this.goSearchForMusic}>Continue as a User</button>
        </div>
          <Login/>
        </div>
      </div>
    )
  }
}

export default Landing;