import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import DarkModeToggle from "./DarkModeToggle";
import { getAllMovies, searchMovie } from "../redux/action/movieAction";
import { useDispatch } from "react-redux";

function NavBar() {
	const dispatch = useDispatch();
	const search = async (word) => {
		if (word === "") {
			dispatch(getAllMovies());
		} else {
			dispatch(searchMovie(word));
		}
	};

	const onSearch = (e) => {
		search(e.target.value);
	};
	return (
		<div className="nav-style w-100">
			<Container>
				<Row className="pt-2">
					<Col xs="2" lg="1" className="d-flex align-items-center">
						<DarkModeToggle />
					</Col>

					<Col xs="2" lg="1" className="d-flex align-items-center">
						<a href="/">
							<img className="logo" src={logo} alt="Logo" />
						</a>
					</Col>

					<Col xs="8" lg="10" className="d-flex align-items-center">
						<div className="search w-100">
							<i className="fa fa-search"></i>
							<input onChange={onSearch} type="text" className="form-control" placeholder="ابحث" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default NavBar;
