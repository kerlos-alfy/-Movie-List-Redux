/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { getAllMovies } from "../redux/action/movieAction";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MoviesList({ getPage }) {
	const [pageCount, setPageCount] = useState(0);
	const [movies, setMovies] = useState([]);
	const dispatch = useDispatch();
	const dataMovies = useSelector((state) => state.moviesReducer.movies);
	const getPageCount = useSelector((state) => state.moviesReducer.pageCount);
	console.log("getPageCount", getPageCount);
	useEffect(() => {
		getAllMovies();
		dispatch(getAllMovies());
	}, [dispatch]);

	useEffect(() => {
		setMovies(dataMovies);
		setPageCount(getPageCount);
	}, [dataMovies, getPageCount]);

	return (
		<Row className="mt-3">
			{movies.length >= 1 ? (
				movies.map((mov) => {
					return <CardMovie key={mov.id} mov={mov} />;
				})
			) : (
				<h2 className="text-center p-5">لا يوجد افلام...</h2>
			)}
			<PaginationComponent pageCount={pageCount} />
		</Row>
	);
}

export default MoviesList;
