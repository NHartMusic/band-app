import React, { Component } from 'react';
import {signOut} from "../../helpers/auth";
import './Admin.css';
// import Form from "../../components/Form/Form";

class Admin extends Component{
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

  handleNewBand = (e) => {
    e.preventDefault();
    window.location.pathname = "/signup";
  }

  manageBands = (e) => {
    e.preventDefault();
    window.location.pathname = "/manage-bands";
  }

  render(){
    return(
      <div id="admin_section">
      <div id="admin_nav">
        <a onClick={this.logUserOut}
            href="/">Logout</a>
      </div>
      <div id="admin_landing">
        <h2>Welcome admin!</h2>
        <h4 className="intro_text">You can add or delete your bands on this page</h4>
        <button id="add_band_button"
        onClick={this.handleNewBand}>Add new band</button>
        <button id="manage_band_button"
        onClick={this.manageBands}>Manage existing bands</button>
      </div>
        {/*<Form/>*/}
      </div>

    )
  }
}



export default Admin;
