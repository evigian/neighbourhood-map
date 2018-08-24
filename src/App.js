import React, { Component } from 'react';
import photo from './icons/athina-omorfh.jpg';
import './App.css';
import Map from './Map.js';
import SideBar from "./SideBar.js";
import ErrorBoundary from "./ErrorBoundary.js";


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'fallDown',
      side: 'left',
      lat: 37.971722,
      lng: 23.726382,
      zoom: 14,
      venues: [],
      selectedVenue: {},
      query: "",
      input: "",
      queryResults: [],
    };

  }

  componentDidMount() {
    this.fetchVenues();


// Google Maps error handling
    window.gm_authFailure = () => {
      alert('There was an error while loading Google Maps. Please check your API key.')
      console.log('There was an error while loading Google Maps. Please check your API key.')
    }
  }

// Fetch venues from Foursquare
  fetchVenues = () => {
  fetch('https://api.foursquare.com/v2/venues/search?ll=37.971722,23.726382&intent=browse&radius=1000&limit=25&categoryId=4d4b7104d754a06370d81259&client_id= LILANW2P1QSZO15TVXTLRIIAIJLZE0GF1EX2IMP4IGF0TSGB&client_secret=50EHSUVMHSAZYKOGYMGFLINITNT4IVZ5A5K25HXMKJFNCU2W&v=20180808')
  .then(response => response.json())
  .then((data) => {
    this.setState({
      venues: data.response.venues,
      queryResults: data.response.venues,
    })
  })
  .catch((error) => {
    alert('There was an error while getting data from FourSquare API.')
    console.log('There was an error while getting data from FourSquare API.')
  })
}


  toggleInfoWindow = clickedVenue => {
    this.setState({
      selectedVenue: clickedVenue
    })
  }

  // updates the venues according to the query
  updateLocations = (queryResults) => {
    this.setState({
      queryResults: queryResults
    })
  }


  render() {


    return (
      <div id="outer-container" style={{height: '100%'}}>
      <main id="page-wrap">
      <div className="App" role="main">
      <SideBar id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} tabIndex='0'
      venues = {this.state.venues}
      toggleInfoWindow = {this.toggleInfoWindow}
      updateLocations = {this.updateLocations}
      />
        <header className="App-header"  role="banner">
        <div className="bm-burger-button" tabIndex='0'></div>
          <img src={photo} className="App-logo animated flipInX delay-2s" alt="neighbourhood in the historic center of Athens" tabIndex='0' aria-label="neighbourhood of Athens"/>
          <h1 className="App-title animated bounceInRight delay-2s" tabIndex='0'>ღ The historic center of Athens ღ</h1>
        </header>
        <ErrorBoundary>
        <Map 
        venues = {this.state.queryResults}
        selectedLocation = {this.state.selectedVenue}
        toggleInfoWindow = {this.toggleInfoWindow}
        />
        </ErrorBoundary>
        <footer className="App-footer" role="contentinfo">
        <p>Created by Evi Giannakou for the FEND Google Developer Nanodegree Scholarship @ Udacity.<br /> 
           Map powered by Google Maps API & Map Details powered by FourSquare API.</p>
        </footer>
      </div>
      </main>
      </div>
    );
  }
}

export default App;
