const StudentData = require("../models/StudentData");

class StudentController {
	// Read All Students
	static getAllStudents(req, res) {
		StudentData.fetchAll()
			.then(([rows, fieldData]) => {
				res.json({ StudentData: rows });
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ error: "Error fetching students" });
			});
	}

	static getStudentById(req, res) {
		const { regNo } = req.params;
		StudentData.findById(regNo)
			.then(([student]) => {
				if (student && student.length > 0) {
					res.json(student[0]);
				} else {
					res.status(404).json({ error: "Student not found" });
				}
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ error: "Error fetching student" });
			});
	}

	static addNewStudent(req, res) {
		const { name, parentName, contact, regNo, email, address } = req.body;
		const newStudent = new StudentData(
			name,
			parentName,
			contact,
			regNo,
			email,
			address
		);
		newStudent
			.save()
			.then(() => {
				res
					.status(201)
					.json({ message: "Student added successfully", student: newStudent });
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ error: "Error adding student" });
			});
	}
	// Update Existing Student
	static updateStudentById(req, res) {
		let { regNo } = req.params;
		regNo = Number(regNo);
		let { name, parentName, contact, email, address } = req.body;
		const newStudent = new StudentData(
			name,
			parentName,
			contact,
			regNo,
			email,
			address
		);
		newStudent
			.updateById()
			.then(() => {
				res.status(200).json({
					message: `Student updated successfully.`,
				});
			})
			.catch((err) => {
				res.status(404).json({
					message: `Couldn't update the student.`,
				});
			});
	}
	// Delete Student
	static deleteStudentById(req, res) {
		const { regNo } = req.params;
		// Find the index of the student with the specified ID
		StudentData.deleteById(Number(regNo))
			.then(() =>
				res.status(200).json({ message: `Student deleted successfully.` })
			)
			.catch((error) =>
				res.status(500).json({
					message: `Couldn't delete the student.May be the student record already not exists in the database.`,
				})
			);
	}
}

module.exports = StudentController;
