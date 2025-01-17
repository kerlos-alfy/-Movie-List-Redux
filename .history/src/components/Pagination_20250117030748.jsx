import ReactPaginate from "react-paginate";
import { useState } from "react";
import axios from "axios";
import { getPage } from "../redux/action/movieAction";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function PaginationComponent() {
	const [pageCount, setpageCount] = useState(0);

	console.log(pages);

	const dispatch = useDispatch();
	const pages = useSelector((state) => state.moviesReducer.pageCount);
	useEffect(() => {
		getAllMovies();
		dispatch(getAllMovies());
	}, [dispatch]);

	useEffect(() => {
		setMovies(dataMovies);
	}, [dataMovies]);

	const handlePageClick = (data) => {
		dispatch(getPage(data.selected + 1));
	};
	return (
		<ReactPaginate
			breakLabel="..."
			nextLabel="التالى"
			onPageChange={handlePageClick}
			marginPagesDisplayed={2}
			pageRangeDisplayed={2}
			pageCount={pageCount}
			previousLabel="السابق"
			containerClassName={"pagination justify-content-center p-3"}
			pageClassName={"page-item"}
			pageLinkClassName={"page-link"}
			previousClassName={"page-item"}
			nextClassName={"page-item"}
			previousLinkClassName={"page-link"}
			nextLinkClassName={"page-link"}
			breakClassName={"page-item"}
			breakLinkClassName={"page-link"}
			activeClassName={"active"}
		/>
	);
}

export default PaginationComponent;
