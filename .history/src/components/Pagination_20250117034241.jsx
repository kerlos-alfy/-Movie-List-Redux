import ReactPaginate from "react-paginate";
import { getPage } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";

function PaginationComponent() {
	const dispatch = useDispatch();
	const pageCount = useSelector((state) => state.moviesReducer.pageCount); // استخدام pageCount مباشرة من الـ Redux

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
			pageCount={pageCount} // استخدام pageCount من الـ Redux
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
