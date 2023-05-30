import {
	FETCH_ASTEROIDS_REQUEST,
	FETCH_ASTEROIDS_SUCCESS,
	FETCH_ASTEROIDS_FAILURE,
	SELECT_ASTEROID, SORT_ASTEROIDS, SEARCH_ASTEROIDS,
} from '../actions';
import Asteroid from "../../models/asteroid";

export interface AsteroidState {
	data: Asteroid[];
	loading: boolean;
	error: string | null;
	selectedAsteroid: Asteroid | null;
}

const initialState: AsteroidState = {
	data: [],
	loading: false,
	error: null,
	selectedAsteroid: null,
};

const asteroidReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_ASTEROIDS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_ASTEROIDS_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case FETCH_ASTEROIDS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case SELECT_ASTEROID:
			return {
				...state,
				selectedAsteroid: action.payload,
			};
		case SEARCH_ASTEROIDS:
			return {
				...state,
				searchTerm: action.payload,
				data: state.data.filter(asteroid => asteroid.name.toLowerCase().includes(action.payload.toLowerCase()))
			};
		case SORT_ASTEROIDS:
			return {
				...state,
				data: [...state.data].sort((a, b) => {
					if (action.payload === 'name') {
						return a.name.localeCompare(b.name);
					} else {
						return 0;
					}
				}),
			};
		default:
			return state;
	}
};

export default asteroidReducer;
