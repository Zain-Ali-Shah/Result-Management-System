import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const AddStudentGrades = ({ addGrades }) => {
	const [formData, setFormData] = useState({
		stName: "",
		a1: 0,
		a2: 0,
		a3: 0,
		project: 0,
		q1: 0,
		q2: 0,
		q3: 0,
		q4: 0,
		midz: 0,
		final: 0,
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
			addGrades(formData);
			setFormData({
				stName: "",
				a1: 0,
				a2: 0,
				a3: 0,
				project: 0,
				q1: 0,
				q2: 0,
				q3: 0,
				q4: 0,
				midz: 0,
				final: 0,
			});
		} else {
			setErrors(validationErrors);
		}
	};
	const validateForm = () => {
		const errors = {};
		if (!formData.stName) {
			errors.stName = "Name is required.";
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
						name="stName"
						value={formData.stName}
						onChange={handleChange}
						isInvalid={!!errors.stName}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.stName}
					</Form.Control.Feedback>
				</Col>
				<Col>
					<Form.Label>Assignment 1</Form.Label>
					<Form.Control
						type="number"
						name="a1"
						min={0}
						max={5}
						step={1}
						value={formData.a1}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Form.Label>Assignment 2</Form.Label>
					<Form.Control
						type="number"
						name="a2"
						min={0}
						max={5}
						step={1}
						value={formData.a2}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<Form.Label>Assignment 3</Form.Label>
					<Form.Control
						type="number"
						name="a3"
						min={0}
						max={5}
						step={1}
						value={formData.a3}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Form.Label>Project</Form.Label>
					<Form.Control
						type="number"
						name="project"
						min={0}
						max={10}
						step={1}
						value={formData.project}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<Form.Label>Quiz 1</Form.Label>
					<Form.Control
						type="number"
						name="q1"
						min={0}
						max={3}
						step={1}
						value={formData.q1}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Form.Label>Quiz 2</Form.Label>
					<Form.Control
						type="number"
						name="q2"
						min={0}
						max={3}
						step={1}
						value={formData.q2}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<Form.Label>Quiz 3</Form.Label>
					<Form.Control
						type="number"
						name="q3"
						min={0}
						max={3}
						step={1}
						value={formData.q3}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Form.Label>Quiz 4</Form.Label>
					<Form.Control
						type="number"
						name="q4"
						min={0}
						max={3}
						step={1}
						value={formData.q4}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<Form.Label>Midz</Form.Label>
					<Form.Control
						type="number"
						name="midz"
						min={0}
						max={13}
						step={1}
						value={formData.midz}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Form.Label>Final</Form.Label>
					<Form.Control
						type="number"
						name="final"
						min={0}
						max={50}
						step={1}
						value={formData.final}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<Button variant="success" type="submit">
						Add Record
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default AddStudentGrades;
