import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
	return (
		<Navbar
			bg="dark"
			data-bs-theme="dark"
			expand="lg"
			className="bg-body-tertiary"
		>
			<Container>
				<Navbar.Brand href="/">Home</Navbar.Brand>
				<Navbar.Brand href="/grade-criteria">Grade Criteria</Navbar.Brand>
				<Navbar.Brand href="/cumulative-sheet">Commulative Sheet</Navbar.Brand>
				<Navbar.Brand href="/finalized-grades">
					Finalized Grades List
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
