import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AddStudentForm from "../Form/AddStudentForm";
import EditStudentPage from "./EditStudentPage";

function StudentTable() {
	const [studentData, setStudentData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/students/getAllStudents")
			.then((response) => response.json())
			.then((data) => {
				setStudentData(data["StudentData"]);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const [showEditPage, setShowEditPage] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState(null);

	const handleEditClick = (student) => {
		setSelectedStudent(student);
		setShowEditPage(true);
	};
	const handleUpdate = (updatedData) => {
		// Send PUT request to update student data in the database
		fetch(
			`http://localhost:5000/students/updateStudentById/${updatedData.regNo}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedData),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log("Student updated successfully:", data);
				// Close the edit page
				setShowEditPage(false);
				// Refresh data by fetching all students again
				fetch("http://localhost:5000/students/getAllStudents")
					.then((response) => response.json())
					.then((data) => {
						setStudentData(data["StudentData"]);
					})
					.catch((error) => console.error("Error fetching data:", error));
			})
			.catch((error) => {
				console.error("Error updating student:", error);
				// Handle error or show error message to the user
			});
	};

	const handleCancelEdit = () => {
		setShowEditPage(false);
	};

	if (showEditPage) {
		return (
			<EditStudentPage
				studentData={selectedStudent}
				onUpdate={handleUpdate}
				onCancel={handleCancelEdit}
			/>
		);
	}

	const addStudent = (formData) => {
		// Send POST request to backend API
		fetch("http://localhost:5000/students/addNewStudent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("New student added:");
				fetch("http://localhost:5000/students/getAllStudents")
					.then((response) => response.json())
					.then((data) => {
						setStudentData(data["StudentData"]);
					})
					.catch((error) => console.error("Error fetching data:", error));
			})
			.catch((error) => {
				console.error("Error adding student:", error);
			});
	};
	const handleDelete = (regNo) => {
		// Send DELETE request to backend API
		fetch(`http://localhost:5000/students/deleteStudentById/${regNo}`, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Student deleted:", data);
				// Filter out the deleted student from the local state
				setStudentData((prevStudentData) =>
					prevStudentData.filter((student) => student.regNo !== regNo)
				);
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
						<th className="bg-dark text-white">Parent Name</th>
						<th className="bg-dark text-white">Contact</th>
						<th className="bg-dark text-white">Reg No</th>
						<th className="bg-dark text-white">Email</th>
						<th className="bg-dark text-white">Address</th>
						<th className="bg-dark text-white">Actions</th>
					</tr>
				</thead>
				<tbody>
					{studentData.map((student) => (
						<tr key={student.regNo}>
							<td>{student.name}</td>
							<td>{student.parentName}</td>
							<td>{student.contact}</td>
							<td>{student.regNo}</td>
							<td>{student.email}</td>
							<td>{student.address}</td>
							<td>
								<Button
									variant="warning"
									onClick={() => handleEditClick(student)}
								>
									Edit
								</Button>{" "}
								<Button
									variant="danger"
									onClick={() => handleDelete(student.regNo)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<AddStudentForm addStudent={addStudent} />
		</>
	);
}

export default StudentTable;
