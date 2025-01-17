import { ALLMOVIES } from "../types/moviesType";

const initialValues = { movies: [], pageCount: 0 };
export const moviesReducer = (state = initialValues, action) => {
	switch (action.type) {
		case ALLMOVIES:
			return { movies: action.data };
		default:
			return state;
	}
};
