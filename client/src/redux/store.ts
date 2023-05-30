import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';

const middleware: any = [];

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(...middleware),
});

export default store;
