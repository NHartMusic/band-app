import React, { Component } from 'react';
import {signOut, authStateChange } from "../../helpers/auth";

class Navbar extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  logUserOut = (e) => {
    e.preventDefault();
    // console.log("you clicked the log out button");
    signOut().then(function() {
      // Sign-out successful.
      console.log("You've signed out");
      window.location.pathname = "/";
    }).catch(function(error) {
      // An error happened.
    });;
  }

  render(){
    return(
      <div>
        <a href="/profile">Home</a>
        <a href="/gigs">Gigs</a>
        <a href="/">Chat</a>
        <a onClick={this.logUserOut} href="/">Logout</a>
      </div>
    )
  }
}



export default Navbar;
