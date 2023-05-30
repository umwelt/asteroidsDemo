import React from 'react';
import { useDispatch } from 'react-redux';
import { sortAsteroids } from '../../redux/actions';
import './SortButton.css';

interface SortButtonProps {
	sortOption: string;
}

const SortButton: React.FC<SortButtonProps> = ({ sortOption }) => {
	const dispatch = useDispatch();

	const handleSort = () => {
		dispatch(sortAsteroids(sortOption));
	};

	return (
		<button onClick={handleSort} className="sort-button big-outlined-button">
			Sort by {sortOption}
		</button>
	);
};

export default SortButton;
