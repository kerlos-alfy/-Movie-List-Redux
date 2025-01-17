import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	//get current page
	const getPage = async (page) => {
		const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3ac2c05f95f92e69875f1b70453ca0cd&language=ar&page=${page}`);
	};

	//fetch data on app load 10 times a second

	return (
		<div className="font color-body">
			<NavBar />
			<Container>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MoviesList getPage={getPage} />} />

						<Route path="/movie/:id" element={<MovieDetails />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</div>
	);
}

export default App;
