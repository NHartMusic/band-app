import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Landing from "./pages/LandingPage/LandingPage";
import BandSignUp from "./pages/BandSignUp/BandSignUp";
import BandProfile from "./pages/BandProfile/BandProfile";
import BandGigs from "./pages/BandGigs/BandGigs";
import FanMusicSearch from "./pages/FanMusicSearch/FanMusicSearch";
import Admin from "./pages/Admin/Admin";
import ManageBands from "./pages/ManageBands/ManageBands";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Landing}/>
          <Route path="/signup" component={BandSignUp}/>
          <Route path="/profile/:id" component={BandProfile}/>
          <Route path="/gigs/:id" component={BandGigs}/>
          <Route path="/music-options" component={FanMusicSearch}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/manage-bands" component={ManageBands}/>
          {/*<Route path = "/searched-bands" component={FanMusicResults}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
