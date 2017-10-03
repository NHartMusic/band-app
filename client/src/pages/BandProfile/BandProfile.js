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
    console.log(this.props.match.params.id);
    let chosenId = this.props.match.params.id;
    //need to retrieve bands id and append below
    API.getOneBand(chosenId)
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
