import { ALLMOVIES } from "../types/moviesType";
import axios from "axios";

export const getAllMoviesa = () => async (dispatch) => {
	try {
		const res = await axios.get(MovieApi);
		dispatch({
			type: ALLMOVIES,
			data: res.data, // تأكد من صحة البيانات القادمة من API
		});
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
};
