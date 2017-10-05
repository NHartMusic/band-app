import React, { Component } from 'react';
import {signOut} from "../../helpers/auth";

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      bandId:this.props.bandId
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
        <a href="/music-options">Search for other bands</a>
        <a href={"/profile/" + this.props.bandId}>Band Profile</a>
        <a href={"/gigs/" + this.props.bandId}>Gigs</a>
      </div>
    )
  }
}



export default Navbar;
