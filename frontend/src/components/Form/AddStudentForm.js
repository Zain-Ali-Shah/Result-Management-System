import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddStudentForm = ({ addStudent }) => {
	const [formData, setFormData] = useState({
		name: "",
		parentName: "",
		contact: "",
		regNo: 0,
		email: "",
		address: "",
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length === 0) {
			addStudent(formData);
			setFormData({
				name: "",
				parentName: "",
				contact: "",
				regNo: 0,
				email: "",
				address: "",
			});
		} else {
			setErrors(validationErrors);
		}
	};
	const validateForm = () => {
		const errors = {};
		if (!formData.name) {
			errors.name = "Name is required.";
		}
		if (!formData.parentName) {
			errors.parentName = "Parent Name is required.";
		}
		if (!formData.contact) {
			errors.contact = "Contact is required.";
		}
		if (formData.regNo === 0) {
			errors.regNo = "Registration Number is required.";
		}
		if (!formData.email) {
			errors.email = "Email is required.";
		}
		if (!formData.address) {
			errors.address = "Address is required.";
		}
		return errors;
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row className="my-3">
				<Col>
					<Form.Label>Student Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Student Name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						isInvalid={!!errors.name}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.name}
					</Form.Control.Feedback>
				</Col>
				<Col>
					<Form.Label>Parent Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Parent Name"
						name="parentName"
						value={formData.parentName}
						onChange={handleChange}
						isInvalid={!!errors.parentName}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.parentName}
					</Form.Control.Feedback>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Form.Label>Contact</Form.Label>
					<Form.Control
						type="text"
						placeholder="Contact"
						name="contact"
						value={formData.contact}
						onChange={handleChange}
						isInvalid={!!errors.contact}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.contact}
					</Form.Control.Feedback>
				</Col>
				<Col>
					<Form.Label>Reg No</Form.Label>
					<Form.Control
						type="number"
						name="regNo"
						value={formData.regNo}
						onChange={handleChange}
						isInvalid={!!errors.regNo}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.regNo}
					</Form.Control.Feedback>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						isInvalid={!!errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.email}
					</Form.Control.Feedback>
				</Col>
				<Col>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Address"
						name="address"
						value={formData.address}
						onChange={handleChange}
						isInvalid={!!errors.address}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.address}
					</Form.Control.Feedback>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Button variant="success" type="submit">
						Add Student
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default AddStudentForm;
