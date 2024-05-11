import "./App.css";
import MyNavbar from "./components/UI/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StudentTable from "./components/UI/StudentTable";
import GradeCriteria from "./components/UI/GradeCriteria";
import CumulativeTable from "./components/UI/CumulativeTable";
import FinalizedGradeList from "./components/UI/FinalizedGradeTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Container>
				<Row>
					<h1 className="text-center">Welcome to Result Management System</h1>
				</Row>
				<Row>
					<MyNavbar />
				</Row>
				<Routes>
					<Route exact path="/" element={<StudentTable />} />
					<Route path="/grade-criteria" element={<GradeCriteria />} />
					<Route path="/cumulative-sheet" element={<CumulativeTable />} />
					<Route path="/finalized-grades" element={<FinalizedGradeList />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
