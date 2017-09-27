import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import DisplayGigs from "../../components/DisplayGigs/DisplayGigs";

class BandGigs extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Navbar/>
        <button>Post Gig</button>
        <h2>Upcoming Gigs:</h2>
        <DisplayGigs/>
      </div>
    )
  }
}



export default BandGigs;
