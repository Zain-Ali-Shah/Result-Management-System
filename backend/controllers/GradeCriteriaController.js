const GradeCriteria = require("../models/GradeCriteria");

class GradeCriteriaController {
	// Get Grade Criteria
	static getGradeCriteria(req, res) {
		res.json(GradeCriteria);
	}
}

module.exports = GradeCriteriaController;
