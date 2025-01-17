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
export const searchMovie = (word) => async (dispatch) => {
	try {
		const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3ac2c05f95f92e69875f1b70453ca0cd&query=${word}&language=ar`);
		dispatch({
			type: ALLMOVIES,
			data: res.data.results,
			pages: res.data.total_pages,
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};
export const getPage = (page) => async (dispatch) => {
	try {
		const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3ac2c05f95f92e69875f1b70453ca0cd&language=ar&page=${page}`);
		dispatch({
			type: ALLMOVIES,
			data: res.data.results,
			pages: res.data.total_pages,
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};
