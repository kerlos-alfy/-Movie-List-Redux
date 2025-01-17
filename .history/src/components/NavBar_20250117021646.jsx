/* eslint-disable react/prop-types */
import { Container, Row, Col } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";
import { getAllMovies } from "../redux/action/movieAction";

import { useDispatch, useSelector } from "react-redux";

function NavBar() {
	const onSearch = (word) => {
		search(word);
	};
	const dispatch = useDispatch();
	const search = async (word) => {
		if (word === "") {
			dispatch(getAllMovies());
			//getAllMovies();
			console.log("object not found");
		} else {
			dispatch(getAllMovies(word));
			//const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3ac2c05f95f92e69875f1b70453ca0cd&query=${word}&language=ar`);
			//setMovies(res.data.results);
			//setPageCount(res.data.total_pages);
		}
	};
	return (
		<div className="nav-style w-100">
			<Container>
				<Row className="pt-2">
					{/* زر الوضع الداكن */}
					<Col xs="2" lg="1" className="d-flex align-items-center">
						<DarkModeToggle />
					</Col>

					{/* الشعار */}
					<Col xs="2" lg="1" className="d-flex align-items-center">
						<a href="/">
							<img className="logo" src="logo.png" alt="Logo" />
						</a>
					</Col>

					{/* مربع البحث */}
					<Col xs="8" lg="10" className="d-flex align-items-center">
						<div className="search w-100">
							<i className="fa fa-search"></i>
							<input
								onChange={(e) => {
									onSearch(e.target.value);
								}}
								type="text"
								className="form-control"
								placeholder="ابحث"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default NavBar;
