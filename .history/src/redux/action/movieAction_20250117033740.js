import { ALLMOVIES } from "../types/moviesType";
import axios from "axios";

// استخدام المتغيرات البيئية
const API_KEY = process.env.VITE_MOVIE_API_KEY;
const BASE_URL = process.env.VITE_BASE_URL;

// أكشن لجلب جميع الأفلام
export const getAllMovies = () => async (dispatch) => {
	try {
		const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ar`);

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
		const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${word}&language=ar`);

		dispatch({
			type: ALLMOVIES,
			data: res.data.results,
			pages: res.data.total_pages,
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};

// أكشن لجلب الأفلام بناءً على الصفحة
export const getPage = (page) => async (dispatch) => {
	try {
		const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ar&page=${page}`);

		dispatch({
			type: ALLMOVIES,
			data: res.data.results,
			pages: res.data.total_pages,
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};
