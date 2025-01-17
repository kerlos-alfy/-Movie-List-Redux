import { ALLMOVIES } from "../types/moviesType";

const getAllMovies = () => {
	return { type: ALLMOVIES, data: [] };
};
