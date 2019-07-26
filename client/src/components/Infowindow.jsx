import React, { Component } from 'react';
import { Marker, InfoWindow, Map } from 'google-maps-react';

class Markerr extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		}

	}

	handleToggleOpen = () => {

		this.setState({
			isOpen: true
		});
	}

	handleToggleClose = () => {
		this.setState({
			isOpen: false
		});
	}
	render() {

		// EACH EVENT DATA
		const allEvents = this.props.events.map((event) => {
			return <Marker
				onClick={() => this.handleToggleOpen()}
				key={this.props.event.id}
				title={this.props.event.name.text}
				position={{ lat: event.venue.latitude, lng: event.venue.longitude }}
				label={this.props.event.name.text}
			/>
		});
		return (
			<Marker
				onClick={() => this.handleToggleOpen()}
				title={'Current Location'}
				position={{ lat: 45.5274423, lng: -73.59654979999999 }}
			>
				{allEvents}

				{
					this.state.isOpen &&
					<InfoWindow onCloseClick={this.props.handleCloseCall}>
						<h1>TEST</h1>
					</InfoWindow>
				}


			</Marker>

		)
	}
}

export default Markerr;