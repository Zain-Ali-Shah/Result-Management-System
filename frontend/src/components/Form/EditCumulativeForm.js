import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const EditCumulativeForm = ({ cumulativeData, onUpdate, onCancel }) => {
	const [formData, setFormData] = useState({ ...cumulativeData });
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
			<Row className="my-3">
				<Col>
					<Form.Label>Student Name</Form.Label>
					<Form.Control
						type="text"
						name="stName"
						value={formData.stName}
						onChange={handleChange}
						required
					/>
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
						required
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
						required
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
						required
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
						required
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
						required
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
						required
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
						required
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
						required
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
						required
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
						required
					/>
				</Col>
			</Row>
			<Button variant="primary" type="submit" className="mt-3">
				Update
			</Button>{" "}
			<Button variant="secondary" className="mt-3" onClick={onCancel}>
				Back
			</Button>
		</Form>
	);
};

export default EditCumulativeForm;
