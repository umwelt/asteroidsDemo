import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchAsteroids } from '../../redux/actions';
import './DateRangeSearch.css';

const DateRangeSearch: React.FC = () => {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const dispatch = useDispatch<Dispatch<any>>();

	const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStartDate(event.target.value);
	};

	const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEndDate(event.target.value);
	};
	const handleSearch = () => {
		if (startDate && endDate) {
			const startDateObj = new Date(startDate);
			const endDateObj = new Date(endDate);
			const dayDifference = Math.ceil(((endDateObj as any) - (startDateObj as any)) / (1000 * 60 * 60 * 24));

			if (dayDifference > 7) {
				alert('Please select a date range of maximum 7 days.');
			} else {
				dispatch(fetchAsteroids(startDate, endDate));
			}
		}
	};

	return (
		<div className="date-range-search-card">
			<div className="date-range-search">
				<div className="date-range-search__input-group">
					<label className="date-range-search__label">
						Start Date:
						<input className="date-range-search__input" type="date" value={startDate} onChange={handleStartDateChange} min="2000-01-01"/>
					</label>
					<label className="date-range-search__label">
						End Date:
						<input className="date-range-search__input" type="date" value={endDate} onChange={handleEndDateChange} />
					</label>
				</div>
				<button className="date-range-search__button" onClick={handleSearch}>Search</button>
			</div>
		</div>
	);
};

export default DateRangeSearch;
