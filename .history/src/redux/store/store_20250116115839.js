import { configureStore } from "@reduxjs/toolkit";
import { ALLMOVIES } from "../types/moviesType";

// eslint-disable-next-line no-unused-vars
const moviesReducer = (state = { movies: [], pageCount: 0 }, action) => {
	switch (action.type) {
		case ALLMOVIES:
			return { movies: action.data };
	}
};

// create a store with the reducer
const store = configureStore({
	reducer: {},
});
