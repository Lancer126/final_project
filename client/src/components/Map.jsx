import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Marker} from 'google-maps-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class SimpleMap extends Component {
 static defaultProps = {
 
   center: {
     lat: 45.5274423,
     lng: -73.59654979999999
   },
   zoom: 11
 };
 render() {
   return (
     // Important! Always set the container height explicitly
     <div style={{ height: '100vh', width: '100%' }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: 'AIzaSyBmOjKnCb27NSuwCaY98GW-m0A9Rk9x9eE'}}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
       >
         <AnyReactComponent
           lat={45.5274423}
           lng={-73.59654979999999}
           text="My Marker"
         />
       </GoogleMapReact>
     </div>
   );
 }
}
export default SimpleMap;


