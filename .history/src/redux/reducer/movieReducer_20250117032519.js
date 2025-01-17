import { ALLMOVIES } from "../types/moviesType";

const initialValues = { movies: [], pageCount: 0, loading: false, error: null };

export const moviesReducer = (state = initialValues, action) => {
	if (action.type === ALLMOVIES) {
		return { ...state, movies: action.data, pageCount: action.pages, loading: false };
	} else if (action.type === "LOADING_MOVIES") {
		return { ...state, loading: true };
	} else if (action.type === "ERROR_MOVIES") {
		return { ...state, error: action.error, loading: false };
	} else {
		return state;
	}
};
