import ReactPaginate from "react-paginate";
import { useState } from "react";
import axios from "axios";
function PaginationComponent() {
	const [pageCount, setPageCount] = useState(0);
	const getPage = async (page) => {
		const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3ac2c05f95f92e69875f1b70453ca0cd&language=ar&page=${page}`);
		//setMovies(res.data.results);
		setPageCount(res.data.total_pages);
	};

	const handlePageClick = (data) => {
		getPage(data.selected + 1);
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