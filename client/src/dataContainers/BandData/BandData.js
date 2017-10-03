import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import BandProfile from "../../pages/BandProfile/BandProfile";
import FanMusicSearch from "../../pages/FanMusicSearch/FanMusicSearch";

class BandDataContainer extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {

    };
    // Binding the event listeners which we will pass as props
  }

  getBandId = (bandIdFromChild) => {
    console.log("data from child:", bandIdFromChild);
  }

  render() {
    return (
        <div>
          <Route path="/profile/:id" component={BandProfile}/>
          <Route path = "/music-options" component={FanMusicSearch}/>
        </div>
    );
  }
}

export default BandDataContainer;
