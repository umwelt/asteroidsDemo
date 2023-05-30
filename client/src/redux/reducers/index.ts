import { combineReducers, Reducer } from "redux";
import asteroidReducer, { AsteroidState } from './asteroidReducer';
import Asteroid from "../../models/asteroid";

export interface RootState {
	asteroids: AsteroidState;
	selectedAsteroid: Asteroid | null;
}

// Combine your reducers
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
	asteroids: asteroidReducer,
	selectedAsteroid: (state = null, action) => {
		return state;
	},
});

export default rootReducer;
