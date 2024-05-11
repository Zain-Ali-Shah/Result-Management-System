const CumulativeData = require("../models/CumulativeData");

class CumulativeController {
	// Read All Cumulative Data
	static getAllCumulativeData(req, res) {
		CumulativeData.findAll()
			.then((cumulativeData) => {
				res.json(cumulativeData);
			})
			.catch((err) => console.log(err));
	}
	// Read Cumulative Data by Student Name
	static getStudentCumulativeById(req, res) {
		let { stName } = req.params;
		stName = String(stName);
		CumulativeData.findOne({ where: { stName: stName } })
			.then((cumulative) => res.json(cumulative))
			.catch((err) => {
				res.status(404).json({ error: "Student Cumulative Data not found" });
			});
	}
	// Create Cumulative Data
	static addNewCumulative(req, res) {
		const { stName, a1, a2, a3, project, q1, q2, q3, q4, midz, final } =
			req.body;
		const newCumulative = CumulativeData.create({
			stName: stName,
			a1: a1,
			a2: a2,
			a3: a3,
			project: project,
			q1: q1,
			q2: q2,
			q3: q3,
			q4: q4,
			midz: midz,
			final: final,
		})
			.then((result) => {
				res.status(201).json({
					cumulativeData: newCumulative,
				});
			})
			.catch((err) => console.log(err));
	}
	// Update Cumulative Data by Student name
	static updateCumulativeById(req, res) {
		let { id, stName, a1, a2, a3, project, q1, q2, q3, q4, midz, final } =
			req.body;
		// Find the student in the array by its id
		const cumulative = CumulativeData.findByPk(id)
			.then((cumulative) => {
				(cumulative.stName = stName),
					(cumulative.a1 = a1),
					(cumulative.a2 = a2),
					(cumulative.a3 = a3),
					(cumulative.project = project),
					(cumulative.q1 = q1),
					(cumulative.q2 = q2),
					(cumulative.q3 = q3),
					(cumulative.q4 = q4),
					(cumulative.midz = midz),
					(cumulative.final = final);
				return cumulative.save();
			})
			.then((result) => {
				res
					.status(200)
					.json({ message: "Student Cumulative Data updated successfully." });
			})
			.catch((err) => console.log(err));
	}
	// Delete Cumulative Data
	static deleteCumulativeById(req, res) {
		let id = req.params.id;
		id = Number(id);
		CumulativeData.findByPk(id)
			.then((cumulative) => {
				return cumulative.destroy();
			})
			.then(
				res
					.status(200)
					.json({ message: "Student Cumulative Data deleted successfully" })
			)
			.catch((err) => console.log(err));
	}
}

module.exports = CumulativeController;
