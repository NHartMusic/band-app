import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import BandDeets from "../../components/BandDeets/BandDeets";
import BandSongs from "../../components/BandSongs/BandSongs";
import API from '../../utils/API';

class BandProfile extends Component{
  constructor(){
    super();
    this.state = {
      bandId: ""
    }
  }
  componentDidMount(){
    //need to retrieve bands id and append below
    API.getOneBand("59d1997074694e1300e0cee2")
        .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
