import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';
import Asteroid from '../models/asteroid';

interface AsteroidState {
	data: Asteroid[];
	loading: boolean;
	error: string | null;
	selectedAsteroid: Asteroid | null;
}

interface RootState {
	asteroids: AsteroidState;
	selectedAsteroid: Asteroid | null;
}

const initialState: RootState = {
	asteroids: {
		data: [],
		loading: false,
		error: null,
		selectedAsteroid: null,
	},
	selectedAsteroid: null,
};

const middleware: any = []; // Remove the 'thunk' import and initialize middleware as an empty array

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(...middleware),
});

export default store;
