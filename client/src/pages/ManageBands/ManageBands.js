import React, { Component } from 'react';
import API from '../../utils/API';
import DisplayGenres from "../../components/DisplayGenres/DisplayGenres";
import './ManageBands.css';

class ManageBands extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      allBands: []
    };
    // Binding the event listeners which we will pass as props
  }

  componentDidMount(){
    API.getBands()
        .then(res =>
          this.setState({
            allBands:res.data
          })
        )
        .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <a href="/admin">Go back to admin page</a>
      <h3>Want to delete band?</h3>
      <p>Click on the X button below</p>

      <DisplayGenres
      bandData = {this.state.allBands}
      deleteBand = {true}/>
      {/*map through bands and display all of them with a delete button*/}
      </div>
    );
  }
}

export default ManageBands;
