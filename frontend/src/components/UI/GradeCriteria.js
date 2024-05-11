import { useState, useEffect } from "react";
import React from "react";
import Table from "react-bootstrap/Table";

const GradeCriteria = () => {
	const [grades, setGrades] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/grades/getGradeCriteria")
			.then((response) => response.json())
			.then((data) => {
				setGrades(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<Table responsive hover bordered striped className="my-4">
			<thead>
				<tr>
					<th className="bg-dark text-white">Percentage</th>
					<th className="bg-dark text-white">GPA</th>
					<th className="bg-dark text-white">Grade</th>
					<th className="bg-dark text-white">Remarks</th>
				</tr>
			</thead>
			<tbody>
				{grades.map((grade) => (
					<tr key={grade.percentage}>
						<td>{grade.percentage}</td>
						<td>{grade.gpa}</td>
						<td>{grade.grade}</td>
						<td>{grade.remarks}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default GradeCriteria;
