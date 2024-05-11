// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const FinalizedGradesController = require("../controllers/FinalizedGradesController");

/**
 * @swagger
 * tags:
 *   name: Finalized Grades
 *   description: API operations related to finalized grades
 */

/**
 * @swagger
 * /finalizedGrades/getAllFinalizedGrades:
 *   get:
 *     summary: Get all finalized grades
 *     tags: [Finalized Grades]
 *     responses:
 *       '200':
 *         description: A list of all finalized grades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FinalizedGrade'
 */
router.get(
	"/getAllFinalizedGrades",
	FinalizedGradesController.getAllFinalizedGrades
);

/**
 * @swagger
 * /finalizedGrades/getFinalizedGradesById/{stName}:
 *   get:
 *     summary: Get finalized grades by student name
 *     tags: [Finalized Grades]
 *     parameters:
 *       - in: path
 *         name: stName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the student to retrieve finalized grades for
 *     responses:
 *       '200':
 *         description: Finalized grades for the specified student
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FinalizedGrade'
 *       '404':
 *         description: Finalized grades not found for the specified student
 */
router.get(
	"/getFinalizedGradesById/:stName",
	FinalizedGradesController.getFinalizedGradesById
);

module.exports = router;
