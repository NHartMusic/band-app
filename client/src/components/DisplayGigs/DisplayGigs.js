import React, { Component } from 'react';
import API from '../../utils/API';
// import MyMapComponent from "../MapWithAMarker/MapWithAMarker.js";
// import "./DisplayGigs.css";

class DisplayGigs extends Component{
  constructor(props){
    super(props);
    this.state = {
      completeAddress: ""
    }
  }


  findLocation = () => {
    API.getMaps("Great American Music Hall")
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
           <div className="row">
       
                <h3>{place}</h3>
                <hr/>
                <h3>{date}</h3>
                <hr/>
                <h3>{this.state.completeAddress}</h3>
              
              {/*<MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />*/}

          </div>
 
        </div>
      </div>
    )
  }
}



export default DisplayGigs;
