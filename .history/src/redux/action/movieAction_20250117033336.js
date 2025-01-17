import { ALLMOVIES } from "../types/moviesType";
import axios from "axios";
import config from "../../../src/config"; // استيراد config

// أكشن لجلب جميع الأفلام
export const getAllMovies = () => async (dispatch) => {
	try {
		const res = await axios.get(`${config.BASE_URL}/movie/popular?api_key=${config.API_KEY}&language=ar`);

		dispatch({
			type: ALLMOVIES,
			data: res.data.results,
			pages: res.data.total_pages,
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};

// أكشن للبحث عن فيلم
export const searchMovie = (word) => async (dispatch) => {
	try {
		const res = await axios.get(`${config.BASE_URL}/search/movie?api_key=${config.API_KEY}&query=${word}&language=ar`);

		dispatch({
			type: ALLMOVIES,
			data: res.data.results,
			pages: res.data.total_pages,
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};
