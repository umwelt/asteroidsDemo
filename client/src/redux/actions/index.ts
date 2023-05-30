import Asteroid from "../../models/asteroid";
import { Dispatch } from "react";
import { getAsteroids, getAsteroidById } from "../../services/apiService";
import {RootState} from "../reducers";
import {useSelector} from "react-redux";

export const FETCH_ASTEROIDS_REQUEST = 'FETCH_ASTEROIDS_REQUEST';
export const FETCH_ASTEROIDS_SUCCESS = 'FETCH_ASTEROIDS_SUCCESS';
export const FETCH_ASTEROIDS_FAILURE = 'FETCH_ASTEROIDS_FAILURE';
export const SELECT_ASTEROID = 'SELECT_ASTEROID';
export const SEARCH_ASTEROIDS = 'SEARCH_ASTEROIDS';
export const SORT_ASTEROIDS = 'SORT_ASTEROIDS';

export interface FetchAsteroidsRequestAction {
	type: typeof FETCH_ASTEROIDS_REQUEST;
}

export interface FetchAsteroidsSuccessAction {
	type: typeof FETCH_ASTEROIDS_SUCCESS;
	payload: Asteroid[];
}

export interface FetchAsteroidsFailureAction {
	type: typeof FETCH_ASTEROIDS_FAILURE;
	payload: string;
}

export interface SelectAsteroidAction {
	type: typeof SELECT_ASTEROID;
	payload: Asteroid;
}

export interface SearchAsteroidsAction {
	type: typeof SEARCH_ASTEROIDS;
	payload: string;
}

export interface SortAsteroidsAction {
	type: typeof SORT_ASTEROIDS;
	payload: string;
}

export type AsteroidsAction =
	| FetchAsteroidsRequestAction
	| FetchAsteroidsSuccessAction
	| FetchAsteroidsFailureAction
	| SelectAsteroidAction
	| SearchAsteroidsAction
	| SortAsteroidsAction;

export const fetchAsteroidsRequest = (): FetchAsteroidsRequestAction => ({
	type: FETCH_ASTEROIDS_REQUEST,
});

export const fetchAsteroidsSuccess = (asteroids: Asteroid[]): FetchAsteroidsSuccessAction => ({
	type: FETCH_ASTEROIDS_SUCCESS,
	payload: asteroids,
});

export const fetchAsteroidsFailure = (error: string): FetchAsteroidsFailureAction => ({
	type: FETCH_ASTEROIDS_FAILURE,
	payload: error,
});

export const fetchAsteroids = (startDate: string, endDate: string) => async (dispatch: Dispatch<AsteroidsAction>) => {
	dispatch(fetchAsteroidsRequest());

	try {
		const asteroids = await getAsteroids(startDate, endDate);
		dispatch(fetchAsteroidsSuccess(asteroids));
	} catch (error: any) {
		dispatch(fetchAsteroidsFailure(error.message));
	}
};

export const fetchAsteroidById = (id: string) => async (dispatch: Dispatch<AsteroidsAction>) => {
	dispatch(fetchAsteroidsRequest());
	try {
		const asteroid = await getAsteroidById(id);
		dispatch(fetchAsteroidsSuccess([asteroid]));
	} catch (error: any) {
		dispatch(fetchAsteroidsFailure(error.message));
	}
};

export const selectAsteroid = (asteroid: Asteroid): SelectAsteroidAction => ({
	type: SELECT_ASTEROID,
	payload: asteroid,
});

export const searchAsteroids = (searchTerm: string): SearchAsteroidsAction => ({
	type: SEARCH_ASTEROIDS,
	payload: searchTerm,
});

export const sortAsteroids = (sortOption: string): SortAsteroidsAction => ({
	type: SORT_ASTEROIDS,
	payload: sortOption,
});
