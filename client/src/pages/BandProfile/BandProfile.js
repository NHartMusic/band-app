import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import BandDeets from "../../components/BandDeets/BandDeets";
import BandSongs from "../../components/BandSongs/BandSongs";
import API from '../../utils/API';

class BandProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      oneBandsData: ""
    }
  }

  componentDidMount(){
    //need to retrieve bands id and append below
    API.getOneBand("59d1997074694e1300e0cee0")
        .then(res =>
        this.setState({
          oneBandsData: res.data
        }))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <Navbar/>
        <BandDeets
          bandsData = {this.state.oneBandsData}
        />
        <BandSongs/>
      </div>
    )
  }
}



export default BandProfile;
