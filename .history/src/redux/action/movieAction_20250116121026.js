import { ALLMOVIES } from "../types/moviesType";

export const getAllMoviesa = () => {
	return { type: ALLMOVIES, data: [] };
};
