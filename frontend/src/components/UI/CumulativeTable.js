import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AddStudentGrades from "../Form/AddStudentGrades";
import EditCumulativePage from "./EditCumulativePage";

const CumulativeTable = () => {
	const [cumulativeData, setCumulativeData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/cumulative/getAllCumulativeData")
			.then((response) => response.json())
			.then((data) => {
				setCumulativeData(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);
	const [showEditPage, setShowEditPage] = useState(false);
	const [selectedCumulative, setSelectedCumulative] = useState(null);
	const handleEditClick = (cumulative) => {
		setSelectedCumulative(cumulative);
		setShowEditPage(true);
	};
	const handleUpdate = (updatedData) => {
		// Send PUT request to update student data in the database
		fetch(`http://localhost:5000/cumulative/updateCumulativeById`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Student Cumulative updated successfully:");
				// Close the edit page
				setShowEditPage(false);
				// Refresh data by fetching all students again
				fetch("http://localhost:5000/cumulative/getAllCumulativeData")
					.then((response) => response.json())
					.then((data) => {
						setCumulativeData(data);
					})
					.catch((error) => console.error("Error fetching data:", error));
			})
			.catch((error) => {
				console.error("Error updating cumulative:", error);
			});
	};
	const handleCancelEdit = () => {
		setShowEditPage(false);
	};
	if (showEditPage) {
		return (
			<EditCumulativePage
				cumulativeData={selectedCumulative}
				onUpdate={handleUpdate}
				onCancel={handleCancelEdit}
			/>
		);
	}
	const handleAddGrades = (newGradeData) => {
		// Send POST request to add grades for a student
		fetch("http://localhost:5000/cumulative/addNewCumulative", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newGradeData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("New grade added:");
				fetch("http://localhost:5000/cumulative/getAllCumulativeData")
					.then((response) => response.json())
					.then((data) => {
						setCumulativeData(data);
					})
					.catch((error) => console.error("Error fetching data:", error));
			})
			.catch((error) => {
				console.error("Error adding grade:", error);
			});
	};
	const handleDelete = (id) => {
		// Send DELETE request to delete student data from the database
		fetch(`http://localhost:5000/cumulative/deleteCumulativeById/${id}`, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Student deleted:", data);
				// Update local state by removing the deleted student record
				setCumulativeData(cumulativeData.filter((data) => data.id !== id));
			})
			.catch((error) => {
				console.error("Error deleting student:", error);
			});
	};
	return (
		<>
			<Table responsive hover bordered striped className="my-4">
				<thead>
					<tr>
						<th className="bg-dark text-white">Student Name</th>
						<th className="bg-dark text-white">Assignment 1</th>
						<th className="bg-dark text-white">Assignment 2</th>
						<th className="bg-dark text-white">Assignment 3</th>
						<th className="bg-dark text-white">Project</th>
						<th className="bg-dark text-white">Quiz 1</th>
						<th className="bg-dark text-white">Quiz 2</th>
						<th className="bg-dark text-white">Quiz 3</th>
						<th className="bg-dark text-white">Quiz 4</th>
						<th className="bg-dark text-white">Midterm</th>
						<th className="bg-dark text-white">Final</th>
						<th className="bg-dark text-white">Actions</th>
					</tr>
					<tr>
						<th></th>
						<th>5</th>
						<th>5</th>
						<th>5</th>
						<th>10</th>
						<th>3</th>
						<th>3</th>
						<th>3</th>
						<th>3</th>
						<th>13</th>
						<th>50</th>
					</tr>
				</thead>
				<tbody>
					{cumulativeData.map((data) => (
						<tr key={data.id}>
							<td>{data.stName}</td>
							<td>{data.a1}</td>
							<td>{data.a2}</td>
							<td>{data.a3}</td>
							<td>{data.project}</td>
							<td>{data.q1}</td>
							<td>{data.q2}</td>
							<td>{data.q3}</td>
							<td>{data.q4}</td>
							<td>{data.midz}</td>
							<td>{data.final}</td>
							<td>
								<Button variant="warning" onClick={() => handleEditClick(data)}>
									Edit
								</Button>{" "}
								<Button variant="danger" onClick={() => handleDelete(data.id)}>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<AddStudentGrades addGrades={handleAddGrades} />
		</>
	);
};

export default CumulativeTable;
