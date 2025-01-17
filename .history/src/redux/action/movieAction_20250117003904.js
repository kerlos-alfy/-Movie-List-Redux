import { ALLMOVIES, MovieApi } from "../types/moviesType";

import axios from "axios";

export const getAllMoviesa = async () => {
	const res = await axios.get(MovieApi);
	return { type: ALLMOVIES, data: res.data.results };
};
