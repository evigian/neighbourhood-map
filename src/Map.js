import React, { Component } from 'react';
import markerIcon from "./icons/love-location-pin.png"; //Icon made by Freepik from www.flaticon.com
import iconMarker from "./icons/placeholder.png"; //Icon made by Freepik from www.flaticon.com
import { withGoogleMap, GoogleMap, Marker, withScriptjs, InfoWindow } from 'react-google-maps';
//import * as data from "./data/images.json";
import background from "./icons/arxaia-ellada.png";

const retroMap = require("./data/mapStyle.json"); //map style from: https://snazzymaps.com/style/1443/cleaner-midnight

class Map extends Component {
 

   render() {
    
   const GoogleMapElement = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        role="application"
        tabIndex='-1'
        defaultOptions={{ styles: retroMap }}
        defaultCenter = { { lat: 37.971722, lng: 23.726382 } }
        defaultZoom = { 15 }
        onTilesLoaded={() =>
          (document.querySelector("iframe").title = "Google map")
        }
        >

        {this.props.venues.map((venue, index) =>
        <Marker
        key={index}
        id={venue.id}
        name={venue.name}
        icon={iconMarker}
        alt={`marker-icon of ${venue.name}`}
        position={{ lat: venue.location.lat, lng: venue.location.lng }} 
        onClick={() => {this.props.toggleInfoWindow(index)}}
        animation={this.props.selectedLocation === index ? window.google.maps.Animation.BOUNCE: window.google.maps.Animation.DROP}
        tabIndex='0'>
        

 
        {this.props.selectedLocation === index && (
                    <InfoWindow
                    onCloseClick={props.onToggleOpen}>
                    <div className="info-window" aria-label="info-window" role="dialog">
                       <h3>{venue.name}</h3>
                      
                       <img className="background-img" src={background} alt="ancient Greece painting"/>
                       <p>{venue.location.formattedAddress[0]}</p>
                       <p>{venue.location.formattedAddress[1]}</p> 
                       <img src={markerIcon} alt="heart location pin"/>
                    </div>
                </InfoWindow>

      )}
        </Marker>

      )}
      </GoogleMap>
   ));
   
   return(
      <div className="map">
      
        <GoogleMapElement
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCju5TWpHsgFOnfVp10BnSjp7FBq4iBWOU&&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `700px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          tabIndex='-1'
        />
      </div>
      );
    }
  };

export default Map;