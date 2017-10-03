import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import DisplayGigs from "../../components/DisplayGigs/DisplayGigs";
import API from '../../utils/API';

class BandGigs extends Component{
  constructor(props){
    super(props);
    this.state = {
      oneBandsGigs: ""
    }
  }

  componentDidMount(){
    //need to retrieve bands id and append below
    let bandId = this.props.match.params.id;
    API.getOneBandsGigs(bandId)
    .then(res => 
    this.setState({
      oneBandsGigs: res.data.gigs
    }))
    .catch(err => console.log(err));
  }
  render(){
    return(
      <div>
        <Navbar/>
        <button>Post Gig</button>
        <h2>Upcoming Gigs:</h2>
        <DisplayGigs
          gigData = {this.state.oneBandsGigs}/>

      </div>
    )
  }
}



export default BandGigs;
