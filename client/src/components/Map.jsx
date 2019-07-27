import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeMarker: {},
      selectedPlace: {}

    }

  }

  handleToggleOpen = (event) => {
console.log(event.target, "test")
    this.setState({
      isOpen: true
    });
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
      return <Marker
        onClick = {this.onMarkerClick}
        key={event.id}
        title={event.name.text}
        position={{ lat: event.venue.latitude, lng: event.venue.longitude }}
        name={event.name.text}
      
      />
    });
    const allTags = this.props.events.map((event) => {
      return <InfoWindow 
      marker={this.state.activeMarker}
      onClose={this.onInfoWindowClose}
      visible={this.state.showingInfoWindow}>
      <p>{event.name.text}</p>
      </InfoWindow>
    })

    return (
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
        {allTags}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBmOjKnCb27NSuwCaY98GW-m0A9Rk9x9eE")
})(GoogleMapsContainer)