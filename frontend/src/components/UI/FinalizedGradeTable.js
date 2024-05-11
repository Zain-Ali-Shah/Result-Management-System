import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/esm/Table";

const FinalizedGradeList = (props) => {
	const [studentSummaries, setStudentSummaries] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/finalizedGrades/getAllFinalizedGrades")
			.then((response) => response.json())
			.then((data) => {
				setStudentSummaries(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);
	return (
		<Table responsive hover bordered striped className="my-4">
			<thead>
				<tr>
					<th className="bg-dark text-white">Student Name</th>
					<th className="bg-dark text-white">Assignment Total</th>
					<th className="bg-dark text-white">Quiz Total</th>
					<th className="bg-dark text-white">Project</th>
					<th className="bg-dark text-white">Midterm</th>
					<th className="bg-dark text-white">Final</th>
					<th className="bg-dark text-white">Total</th>
					<th className="bg-dark text-white">Percentage</th>
					<th className="bg-dark text-white">Grade</th>
					<th className="bg-dark text-white">Remarks</th>
				</tr>
				<tr>
					<th></th>
					<th>15</th>
					<th>12</th>
					<th>10</th>
					<th>13</th>
					<th>50</th>
					<th>100</th>
					<th>100%</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{studentSummaries.map((data, index) => (
					<tr key={index}>
						<td>{data.stName}</td>
						<td>{data.assignmentSum}</td>
						<td>{data.quizSum}</td>
						<td>{data.project}</td>
						<td>{data.midterm}</td>
						<td>{data.final}</td>
						<td>{data.total}</td>
						<td>{data.percentage}</td>
						<td>{data.grade}</td>
						<td>{data.remarks}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default FinalizedGradeList;
