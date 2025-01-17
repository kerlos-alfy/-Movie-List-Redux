import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesa } from "./redux/action/movieAction";
function App() {
	const [movies, setMovies] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	const dispatch = useDispatch();

	//get all movies
	// const getAllMovies = async () => {
	// 	const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3ac2c05f95f92e69875f1b70453ca0cd&language=ar");
	// 	setMovies(res.data.results);
	// 	setPageCount(res.data.total_pages);
	// };

	//search for movie
	const search = async (word) => {
		if (word === "") {
			//getAllMovies();
			console.log("object not found");
		} else {
			const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3ac2c05f95f92e69875f1b70453ca0cd&query=${word}&language=ar`);
			setMovies(res.data.results);
			setPageCount(res.data.total_pages);
		}
	};

	//get current page
	const getPage = async (page) => {
		const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3ac2c05f95f92e69875f1b70453ca0cd&language=ar&page=${page}`);
		setMovies(res.data.results);
		setPageCount(res.data.total_pages);
	};

	//fetch data on app load 10 times a second
	useEffect(() => {
		//getAllMovies();
		dispatch(getAllMoviesa());
	}, [dispatch]);

	const data = useSelector((state) => state.moviesReducer.movies);
	console.log(`data`, data);
	return (
		<div className="font color-body">
			<NavBar search={search} />
			<Container>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MoviesList movies={movies} pageCount={pageCount} getPage={getPage} />} />

						<Route path="/movie/:id" element={<MovieDetails />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</div>
	);
}

export default App;
