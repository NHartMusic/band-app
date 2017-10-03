import React, { Component } from 'react';
// import "./DisplayGigs.css";

class DisplayGigs extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }


  splitString = () => {
    // var gigArr = this.props.gigData[0].split(", ");
    // console.log(gigArr);
    // this.setState({
    //   place: gigArr[0],
    //   date: gigArr[1]
    // })
  }
  
  componentDidUpdate(){
    // this.splitString();
    console.log(this.props.gigData);
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
      <div className="row">
        <div className="col-md-6">
          <h3>{place}</h3>
        </div>
        <div className="col-md-6">
          <h3>{date}</h3>
        </div>
      </div>
    )
  }
}



export default DisplayGigs;
