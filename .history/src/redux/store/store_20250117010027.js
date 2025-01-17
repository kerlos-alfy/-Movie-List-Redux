import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../reducer/movieReducer";

// create a store with the reducer
export const store = configureStore({
	reducer: { movies: moviesReducer },
});
