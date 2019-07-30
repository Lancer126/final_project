import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbarr from './Navbarr';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  componentDidMount() {
    document.body.classList.remove('loginBg');
    document.body.style.background= "white";
  }

  handleToggleOpen = (event) => {

    if (event.id === this.props.events.id) {
      this.setState({
        isOpen: true
      });
    }
  }

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  }
  onMarkerClick = (props, marker, e) => {

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    //const link = '/event/'+ this.props.events.id;

    const style = {
      width: 'auto',
      height: '80%',
      'marginLeft': '2%',
      'marginRight': '2%',
      'marginTop': '0%',
      'marginBottom': '0%'
    }

    // EACH EVENT DATA
    const allEvents = this.props.events.map((event) => {

      var url = '/event/' + event.id;
        
      return <Marker
        onClick={this.onMarkerClick}
        key={event.id}
        title={event.name.text}
        position={{ lat: event.venue.latitude, lng: event.venue.longitude }}
        name={event.name.text}
        description={event.description.text}
        url={url}
      />
    });

    


    return (
      <div>

<Navbarr />
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 45.5274423, lng: -73.59654979999999 }}
      >


        {/* MARKER CURRENT LOCATION */}
        <Marker
          onClick={this.onMarkerClick}
          title={'Current Location'}
          position={{ lat: 45.5274423, lng: -73.59654979999999 }}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <p>Current Location</p>
        </InfoWindow>
        {/* MARKER FOR EACH */}
        {allEvents}

        <InfoWindow

          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <h4>{this.state.activeMarker.name}</h4>
          <p>{this.state.activeMarker.description}</p>
          <a href={this.state.activeMarker.url} id = "mrenfo">More Info</a>
          
        </InfoWindow>
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBmOjKnCb27NSuwCaY98GW-m0A9Rk9x9eE")
})(GoogleMapsContainer)