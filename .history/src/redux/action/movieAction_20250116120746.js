import { ALLMOVIES } from "../types/moviesType";

export const getAllMovies = () => {
	return { type: ALLMOVIES, data: [] };
};
