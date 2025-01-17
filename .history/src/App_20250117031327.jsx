import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="font color-body">
			<NavBar />
			<BrowserRouter>
				<Container>
					<Routes>
						<Route path="/" element={<MoviesList />} />

						<Route path="/movie/:id" element={<MovieDetails />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
