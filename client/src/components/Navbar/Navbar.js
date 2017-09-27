import React, { Component } from 'react';

class Navbar extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <a href="/">Home</a>
        <a href="/">Gigs</a>
        <a href="/">Chat</a>
        <a href="/">Logout</a>
      </div>
    )
  }
}



export default Navbar;
