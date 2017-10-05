import React, { Component } from 'react';
// import API from '../../utils/API';
import './DisplayGenres.css';
import { Button } from 'react-bootstrap';

class DisplayGenres extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleClick = (event) => {
    console.log(event.target.id);
    window.location.pathname = `/profile/${event.target.id}`;
  }

  render(){
    return(
      <div className="row">
        {this.props.bandData.map(x => {
          return(
            <div className="oneBand" key={x._id}>
              <h3>{x.name}</h3>
              <p className= "bandText">Genre: <em>{x.genre}</em></p>
              <img
              className="bandImg"
              src={x.photoURL}
              alt="band gathering together"/>
              <Button bsStyle="danger" id={x._id}
                onClick={this.handleClick}
              >Go to bands profile</Button>
            </div>

          )
        })}
      </div>
    )
  }
}



export default DisplayGenres;
