import React, { Component } from 'react';
import API from '../../utils/API';
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

  handleDelete = (event) => {
    // console.log("Boom! You're gone");
    // console.log(event.target.id + " you're gone");
    API.deleteBand(event.target.id)
        .then(window.location.pathname="/manage-bands")
        .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="row">
        {this.props.bandData.map(x => {
          return(
            <div className="oneBand" key={x._id}>
            {this.props.deleteBand? <button
              className="delete_buttons"
              onClick={this.handleDelete}
              id={x._id}>X</button> :
             <p></p>}
              <h3>{x.name}</h3>
              <p className= "bandText">Genre: <em>{x.genre}</em></p>
              <div className ="row">
              <img
              className="bandImg"
              src={x.photoURL}
              alt="band gathering together"/>
              </div>
              <button className="bandButton" id={x._id}
                onClick={this.handleClick}
              >Go to bands profile</button>
            </div>

          )
        })}
      </div>
    )
  }
}



export default DisplayGenres;