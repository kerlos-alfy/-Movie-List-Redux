import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { getAllMovies } from "../redux/action/movieAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MoviesList() {
	const dispatch = useDispatch();
	const dataMovies = useSelector((state) => state.moviesReducer.movies);

	useEffect(() => {
		dispatch(getAllMovies());
	}, [dispatch]);

	return (
		<Row className="mt-3">
			{dataMovies.length >= 1 ? dataMovies.map((mov) => <CardMovie key={mov.id} mov={mov} />) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}
			<PaginationComponent />
		</Row>
	);
}

export default MoviesList;
