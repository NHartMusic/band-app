import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import BandDeets from "../../components/BandDeets/BandDeets";
import BandSongs from "../../components/BandSongs/BandSongs";

class BandProfile extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Navbar/>
        <BandDeets/>
        <BandSongs/>
      </div>
    )
  }
}



export default BandProfile;
