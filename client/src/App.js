import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Landing from "./pages/LandingPage/LandingPage";
import BandSignUp from "./pages/BandSignUp/BandSignUp";
import BandProfile from "./pages/BandProfile/BandProfile";
import BandGigs from "./pages/BandGigs/BandGigs";
import FanMusicSearch from "./pages/FanMusicSearch/FanMusicSearch";
import FanMusicResults from "./pages/FanMusicResults/FanMusicResults";
=======
// import {BrowserRouter as Router,Route} from 'react-router-dom';

>>>>>>> pull test
import './App.css';

class App extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {

    };
    // Binding the event listeners which we will pass as props
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component={Landing}/>
          <Route path = "/signup" component={BandSignUp}/>
          <Route path = "/profile" component={BandProfile}/>
          <Route path = "/gigs" component={BandGigs}/>
          <Route path = "/music-options" component={FanMusicSearch}/>
          <Route path = "/searched-bands" component={FanMusicResults}/>
        </div>
      </Router>
    );
  }
}

export default App;
