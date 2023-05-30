import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAsteroids } from '../../redux/actions';
import { Button, TextField } from '@material-ui/core';
import './SearchBar.css';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();

	const handleSearch = () => {
		dispatch(searchAsteroids(searchTerm));
	};

	return (
		<div className="searchBar">
			<TextField
				className="searchInput"
				type="text"
				placeholder="Search asteroids..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<Button className="searchButton" onClick={handleSearch}>Search</Button>
		</div>
	);
};

export default SearchBar;
