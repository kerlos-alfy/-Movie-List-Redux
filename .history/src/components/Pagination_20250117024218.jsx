/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";
import { getPage } from "../redux/action/movieAction";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function PaginationComponent({ pageCount }) {
	const dispatch = useDispatch();
	dispatch(getPage(pageCount));
	getPage(pageCount);

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
