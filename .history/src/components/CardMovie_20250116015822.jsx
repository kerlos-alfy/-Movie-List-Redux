import { Col } from "react-bootstrap";

function CardMovie({movies}) {
	return (
		<Col xs="6" sm="6" md="4" lg="3" className="my-1">
			{movies.lenght>1 ():<h1>لا يوجدأفلام متاحة الأن ...</h1>}
		</Col>
	);
}

export default CardMovie;
