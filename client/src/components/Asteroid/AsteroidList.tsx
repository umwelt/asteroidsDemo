import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import AsteroidItem from './AsteroidItem';
import Asteroid from '../../models/asteroid';
import './AsteroidList.css';

const AsteroidList: React.FC = () => {

	const asteroids: Asteroid[] = useSelector(
		(state: RootState) => state.asteroids.data
	);
	const navigate = useNavigate(); // Initialize the useNavigate hook

	const handleAsteroidClick = (id: string) => {
		navigate(`/asteroids/${id}`); // Navigate to the asteroid detail page
	};

	return (
		<div className="asteroid-list">
			<h2 className="asteroid-list__header">Asteroids</h2>
			{Array.isArray(asteroids) && asteroids.length > 0 ? (
				<div className="asteroid-list__items">
					{asteroids.map((asteroid) => (
						<AsteroidItem
							key={asteroid.id}
							asteroid={asteroid}
							onClick={() => handleAsteroidClick(asteroid.id)}
						/>
					))}
				</div>
			) : (
				<p className="asteroid-list__empty">No asteroids available</p>
			)}
		</div>
	);
};

export default AsteroidList;
