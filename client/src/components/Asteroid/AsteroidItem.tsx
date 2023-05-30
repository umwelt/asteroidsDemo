import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAsteroid } from '../../redux/actions';
import Asteroid from '../../models/asteroid';
import './AsteroidItem.css';

interface AsteroidItemProps {
	asteroid: Asteroid;
	onClick: () => void; // Add the onClick prop
}

const AsteroidItem: React.FC<AsteroidItemProps> = ({ asteroid, onClick }) => {
	const dispatch = useDispatch();

	const handleSelectAsteroid = () => {
		dispatch(selectAsteroid(asteroid));
		onClick(); // Call the onClick function to navigate
	};

	return (
		<div
			className={`asteroid-item ${asteroid.is_potentially_hazardous_asteroid ? 'hazardous' : 'safe'}`}
			key={asteroid.id}
			onClick={handleSelectAsteroid}
		>
			<h3 className="asteroid-item__name">{asteroid.name}</h3>
			<p className="asteroid-item__magnitude">ABS Magnitude: {asteroid.absolute_magnitude_h}</p>
			<p className="asteroid-item__hazardous">Is Dangerous?: {`${asteroid.is_potentially_hazardous_asteroid}`}</p>
		</div>
	);
};

export default AsteroidItem;
