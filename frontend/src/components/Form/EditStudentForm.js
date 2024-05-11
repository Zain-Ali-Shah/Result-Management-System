import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditStudentForm = ({ studentData, onUpdate, onCancel }) => {
	const [formData, setFormData] = useState({ ...studentData });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onUpdate(formData);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formStudentName">
				<Form.Label>Student Registration Number</Form.Label>
				<Form.Control
					type="number"
					name="regNo"
					value={formData.regNo}
					onChange={handleChange}
					readOnly
					required
				/>
			</Form.Group>
			<Form.Group controlId="formStudentName">
				<Form.Label>Student Name</Form.Label>
				<Form.Control
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</Form.Group>
			<Form.Group controlId="formParentName">
				<Form.Label>Parent Name</Form.Label>
				<Form.Control
					type="text"
					name="parentName"
					value={formData.parentName}
					onChange={handleChange}
					required
				/>
			</Form.Group>
			<Form.Group controlId="formContact">
				<Form.Label>Contact</Form.Label>
				<Form.Control
					type="text"
					name="contact"
					value={formData.contact}
					onChange={handleChange}
					required
				/>
			</Form.Group>
			<Form.Group controlId="formEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</Form.Group>
			<Form.Group controlId="formAddress">
				<Form.Label>Address</Form.Label>
				<Form.Control
					type="text"
					name="address"
					value={formData.address}
					onChange={handleChange}
					required
				/>
			</Form.Group>
			<Button variant="primary" type="submit" className="mt-3">
				Update
			</Button>{" "}
			<Button variant="secondary" className="mt-3" onClick={onCancel}>
				Back
			</Button>
		</Form>
	);
};

export default EditStudentForm;
