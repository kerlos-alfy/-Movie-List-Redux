import { configureStore } from "@reduxjs/toolkit";
import { ALLMOVIES } from "../types/moviesType";

// eslint-disable-next-line no-unused-vars

const initialValues = { movies: [], pageCount: 0 };
const moviesReducer = (state = initialValues, action) => {
	switch (action.type) {
		case ALLMOVIES:
			return { movies: action.data };
		default:
			return state;
	}
};

// create a store with the reducer
const store = configureStore({
	reducer: {},
});