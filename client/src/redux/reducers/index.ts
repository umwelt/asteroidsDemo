import { combineReducers, Reducer } from "redux";
import asteroidReducer, { AsteroidState } from './asteroidReducer';
import Asteroid from "../../models/asteroid";

// Define the root state shape
export interface RootState {
	asteroids: AsteroidState;
	selectedAsteroid: Asteroid | null;
}

// Combine your reducers
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
	asteroids: asteroidReducer,
	selectedAsteroid: (state = null, action) => {
		// Add your logic for handling the selectedAsteroid state updates
		return state;
	},
});

export default rootReducer;
