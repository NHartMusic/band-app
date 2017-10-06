import React, { Component } from 'react';
import API from '../../utils/API';
// import MyMapComponent from "../MapWithAMarker/MapWithAMarker.js";
import "./DisplayGigs.css";

class DisplayGigs extends Component{
  constructor(props){
    super(props);
    this.state = {
      completeAddress: ""
    }
  }


  findLocation = () => {
    let place = this.props.gigData[0].split(", ")[0];
    API.getMaps(place)
        .then(res => this.setState({
          completeAddress: res.data.results[0].formatted_address
        })
        )
        .catch(err => console.log(err));
  }

  componentDidUpdate(){
    // this.splitString();
    // console.log(this.props.gigData);
    this.findLocation();

  }

  render(){
    let place,date;
    if(!this.props.gigData){
      place = "No data yet bruh";
      date = "No date yet";
    }else{
      place = this.props.gigData[0].split(", ")[0];
      date = this.props.gigData[0].split(", ")[1];
    }
    return(
      <div>
        <div className="row">
          <div className="col-md-3">
            <h2>Venue:</h2>
            <h3>{place}</h3>
          </div>
          <div className="col-md-3">
            <h2>Date:</h2>
            <h3>{date}</h3>
          </div>
          <div  className="col-md-3">
            <h2>Address:</h2>
            <h3>{this.state.completeAddress}</h3>
          </div>
          <div className="col-md-3">
            <h2>Time:</h2>
            <h3>10:00 AM</h3>
          </div>
        </div>
        <iframe
        title="google-map-temporary"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.0072851403183!2d-118.29858018549074!3d34.12056322157549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c09ef11fba31%3A0x510cf028ee214b1f!2s2700+N+Vermont+Ave%2C+Los+Angeles%2C+CA+90027!5e0!3m2!1sen!2sus!4v1507184014803"
        id="googleMap"
        ></iframe>

      </div>
    )
  }
}



export default DisplayGigs;
