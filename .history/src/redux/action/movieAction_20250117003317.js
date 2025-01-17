import { ALLMOVIES } from "../types/moviesType";

export const getAllMoviesa = () => {
	return { type: ALLMOVIES, data: [1, 2, 3, 4] };
};
