import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: 'auto',
      height: '90%',
      'marginLeft': '2%',
      'marginRight': '2%',
     'marginTop': '0%',
     'marginBottom': '0%'

    }

    // EACH EVENT DATA
    const allEvents = this.props.events.map((event) => {
      return <Marker
        onClick={this.onMarkerClick}
        key={event.id}
        title={event.name.text}
        position={{ lat: event.venue.latitude, lng: event.venue.longitude }}
        name={event.name.text}
      />
    });

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
        {/* MARKER FOR EACH */}
        {allEvents}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBmOjKnCb27NSuwCaY98GW-m0A9Rk9x9eE")
})(GoogleMapsContainer)




