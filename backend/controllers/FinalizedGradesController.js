const CumulativeData = require("../models/CumulativeData");

class FinalizedGradesController {
	// Read All Finalized Grades
	static getAllFinalizedGrades(req, res) {
		CumulativeData.findAll()
			.then((cumulativeData) => {
				const dataArray = cumulativeData.map((data) => data.dataValues);
				//console.log(dataArray);
				const FinalizedGrades = dataArray.map((data) => {
					const assignmentSum = data.a1 + data.a2 + data.a3;
					const quizSum = data.q1 + data.q2 + data.q3 + data.q4;
					const total =
						assignmentSum + quizSum + data.project + data.midz + data.final;
					const percentage = total + "%";

					let grade, remarks;

					if (total >= 80) {
						grade = "A";
						remarks = "Excellent";
					} else if (total >= 76) {
						grade = "A-";
						remarks = "Very Good";
					} else if (total >= 72) {
						grade = "B+";
						remarks = "Good";
					} else if (total >= 68) {
						grade = "B";
						remarks = "Better";
					} else if (total >= 64) {
						grade = "B-";
						remarks = "Best";
					} else if (total >= 60) {
						grade = "C+";
						remarks = "Not Good";
					} else if (total >= 55) {
						grade = "C";
						remarks = "Satisfactory";
					} else if (total >= 50) {
						grade = "D";
						remarks = "Not Satisfactory";
					} else {
						grade = "F";
						remarks = "Poor";
					}

					return {
						stName: data.stName,
						assignmentSum,
						quizSum,
						project: data.project,
						midterm: data.midz,
						final: data.final,
						total,
						percentage,
						grade,
						remarks,
					};
				});
				return FinalizedGrades;
			})
			.then((FinalizedGrades) => {
				res.json(FinalizedGrades);
			})
			.catch((err) => console.log(err));
	}
	// Read Finalized Grades by Student Name
	static getFinalizedGradesById(req, res) {
		let { stName } = req.params;
		stName = String(stName);
		CumulativeData.findOne({ where: { stName: stName } })
			.then((cumulative) => {
				const data = cumulative.dataValues;
				const assignmentSum = data.a1 + data.a2 + data.a3;
				const quizSum = data.q1 + data.q2 + data.q3 + data.q4;
				const total =
					assignmentSum + quizSum + data.project + data.midz + data.final;
				const percentage = total + "%";

				let grade, remarks;

				if (total >= 80) {
					grade = "A";
					remarks = "Excellent";
				} else if (total >= 76) {
					grade = "A-";
					remarks = "Very Good";
				} else if (total >= 72) {
					grade = "B+";
					remarks = "Good";
				} else if (total >= 68) {
					grade = "B";
					remarks = "Better";
				} else if (total >= 64) {
					grade = "B-";
					remarks = "Best";
				} else if (total >= 60) {
					grade = "C+";
					remarks = "Not Good";
				} else if (total >= 55) {
					grade = "C";
					remarks = "Satisfactory";
				} else if (total >= 50) {
					grade = "D";
					remarks = "Not Satisfactory";
				} else {
					grade = "F";
					remarks = "Poor";
				}

				return {
					stName: data.stName,
					assignmentSum,
					quizSum,
					project: data.project,
					midterm: data.midz,
					final: data.final,
					total,
					percentage,
					grade,
					remarks,
				};
			})
			.then((FinalizedGrades) => {
				res.json(FinalizedGrades);
			})
			.catch((err) => {
				res.status(404).json({ error: "Student Final Grades not found" });
			});
	}
}

module.exports = FinalizedGradesController;
