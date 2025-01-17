import { ALLMOVIES, MovieApi } from "../types/moviesType";
import axios from "axios";

export const getAllMovies = () => async (dispatch) => {
	try {
		const res = await axios.get(MovieApi);
		dispatch({
			type: ALLMOVIES,
			data: res.data.results,
			pages: res.data.total_pages,
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};
