import { Container, Row, Col } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";
import { getAllMovies, searchMovie } from "../redux/action/movieAction";
import { useDispatch } from "react-redux";

function NavBar() {
	const dispatch = useDispatch();
	const search = async (word) => {
		if (word === "") {
			dispatch(getAllMovies());

			console.log("object not found");
		} else {
			dispatch(searchMovie(word));
		}
	};

	const onSearch = (word) => {
		search(word);
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