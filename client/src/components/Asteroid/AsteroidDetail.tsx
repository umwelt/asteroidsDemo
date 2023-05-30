import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import './AsteroidDetail.css';
import {Link} from "react-router-dom";

const AsteroidDetail: React.FC = () => {
	const selectedAsteroid = useSelector((state: RootState) => state.asteroids.selectedAsteroid);

	if (!selectedAsteroid) {
		return <div className="asteroid-detail">No asteroid selected</div>;
	}

	const cardStyle = {
		border: selectedAsteroid.is_potentially_hazardous_asteroid ? '2px solid red' : '2px solid green',
		borderRadius: '8px',
		padding: '16px',
		margin: '16px',
	};

	const buttonContainerStyle = {
		display: 'flex',
		justifyContent: 'flex-end',
		marginTop: '16px',
	};

	return (
		<div className="asteroid-detail" style={cardStyle}>
			<div style={buttonContainerStyle}>
				<Link to="/" style={buttonStyle}>Go Back</Link>
			</div>
			<h2 className="asteroid-detail__header">Asteroid Details</h2>
			<div className="asteroid-detail__card" >
				<p className="asteroid-detail__property">
					ID: {selectedAsteroid.id}
				</p>
				<p className="asteroid-detail__property">
					Neo Reference ID: {selectedAsteroid.neo_reference_id}
				</p>
				<p className="asteroid-detail__property">
					Name: {selectedAsteroid.name}
				</p>
				<p className="asteroid-detail__property">
					NASA JPL URL: <a href={selectedAsteroid.nasa_jpl_url}>{selectedAsteroid.nasa_jpl_url}</a>
				</p>
				<p className="asteroid-detail__property">
					Absolute Magnitude: {selectedAsteroid.absolute_magnitude_h}
				</p>
				<div className="asteroid-detail__property">
					Estimated Diameter:
					<ul>
						<li>Kilometers: {`${selectedAsteroid.estimated_diameter.kilometers.estimated_diameter_min} - ${selectedAsteroid.estimated_diameter.kilometers.estimated_diameter_max}`}</li>
						<li>Meters: {`${selectedAsteroid.estimated_diameter.meters.estimated_diameter_min} - ${selectedAsteroid.estimated_diameter.meters.estimated_diameter_max}`}</li>
						<li>Miles: {`${selectedAsteroid.estimated_diameter.miles.estimated_diameter_min} - ${selectedAsteroid.estimated_diameter.miles.estimated_diameter_max}`}</li>
						<li>Feet: {`${selectedAsteroid.estimated_diameter.feet.estimated_diameter_min} - ${selectedAsteroid.estimated_diameter.feet.estimated_diameter_max}`}</li>
					</ul>
				</div>
				<p className="asteroid-detail__property">
					Is Potentially Hazardous: {`${selectedAsteroid.is_potentially_hazardous_asteroid}`}
				</p>
				<p className="asteroid-detail__property">
					Close Approach Date: {selectedAsteroid.close_approach_data[0].close_approach_date}
				</p>
				<p className="asteroid-detail__property">
					Relative Velocity (km/h): {selectedAsteroid.close_approach_data[0].relative_velocity.kilometers_per_hour}
				</p>
				<p className="asteroid-detail__property">
					Miss Distance (kilometers): {selectedAsteroid.close_approach_data[0].miss_distance.kilometers}
				</p>
				<p className="asteroid-detail__property">
					Orbiting Body: {selectedAsteroid.close_approach_data[0].orbiting_body}
				</p>
				<p className="asteroid-detail__property">
					Is Sentry Object: {`${selectedAsteroid.is_sentry_object}`}
				</p>
			</div>
		</div>
	);
};

export default AsteroidDetail;

const buttonStyle = {
	border: '2px solid #000',
	borderRadius: '6px',
	padding: '10px 40px',
	fontSize: '16px',
	textDecoration: 'none',
	color: '#000',
};