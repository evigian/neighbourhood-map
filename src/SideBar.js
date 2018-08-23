import React, { Component } from "react";
import { fallDown as Menu } from 'react-burger-menu';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
 
class SideBar extends Component {

  state = {
    query: "",
    input: ""
  };

  updateQuery = query => {
    this.setState({
      query: query,
      input: "",
    });
    this.props.updateLocations(this.filterLocations(this.props.venues, query));
  };

  filterLocations = (venues, query) => 
  venues.filter(venue => 
    venue.name.toLowerCase()
    .includes(query.toLowerCase()));

  render() {
    let showingVenues
    
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingVenues = this.props.venues.filter((venue) => match.test(venue.name))

    } else {
      showingVenues = this.props.venues
    }
     showingVenues.sort(sortBy('name'))

      return (
        <Menu width={ '330px' } aria-hidden="false">
        <div className="search-bar">
         <div className="search-input-wrapper">
            <form onSubmit={event => event.preventDefault()}  role="search">
              <input aria-label="Search for places" 
                type="text"
                placeholder="Search for places"
                value={this.state.query}
                onChange={evt => this.updateQuery(evt.target.value)}
              />
            </form>
          </div>
        </div>

      <ul className="list-items" aria-label="list of arts and entertainment places in Athens" role="menu">
      {showingVenues.map((venue, index) => (
      <li key={index} className="menu-item" aria-label="list-item" role="menubar"
         onClick={() => {this.props.toggleInfoWindow(index)}}
         onKeyPress={() => {this.props.toggleInfoWindow(index)}}
         >
      {venue.name}
      </li>
))}
            {showingVenues.length === 0 && (
              <p className="no-result">No results were found</p>
            )}
      </ul>
        {/*  <a id="acropolis" className="menu-item" href="/acropolis">Acropolis</a>
          <a id="acropolis-museum" className="menu-item" href="/acropolis-museum">Acropolis Museum</a>
          <a id="ancient-agora" className="menu-item" href="/ancient-agora">Ancient Agora</a>
          <a id="roman-agora" className="menu-item" href="/roman-agora">Roman Agora</a>
          <a id="hill-of-pnyx" className="menu-item" href="/hill-of-pnyx">Hill of Pnyx</a>
          <a id="kerameikos" className="menu-item" href="/kerameikos">Kerameikos</a>
          <a id="national-archaeological-museum" className="menu-item" href="/national-archaeological-museum">National Archaeological Museum</a>
          <a id="benaki-museum" className="menu-item" href="/benaki-museum">Benaki Museum</a>
          <a id="numismatic-museum" className="menu-item" href="/numismatic-museum">Numismatic Museum</a>
          <a id="byzantine-museum" className="menu-item" href="/byzantine-museum">Byzantine & Christian Museum</a>
          <a id="canellopoulos-museum" className="menu-item" href="/canellopoulos-museum">Canellopoulos Museum</a>
          <a id="war-museum" className="menu-item" href="/war-museum">War Museum</a>
          <a id="cycladic-museum" className="menu-item" href="/cycladic-museum">Museum of Cycladic Art</a>
          <a id="contemporary-museum" className="menu-item" href="/contemporary-museum">National Museum of Contemporary Art</a>
          <a id="history-museum" className="menu-item" href="/history-museum">Athens University History Museum</a>
          <a id="folk-art-museum" className="menu-item" href="/folk-art-museum">Museum of Greek Folk Art</a>
          <a id="motor-museum" className="menu-item" href="/motor-museum">Hellenic Motor Museum</a>
          <a id="frissiras-museum" className="menu-item" href="/frissiras-museum">Frissiras Museum</a>
          <a id="epigraphic-museum" className="menu-item" href="/epigraphic-museum">Epigraphic Museum</a> */}
          
        </Menu>
      )
  }
};
 
export default SideBar;