const express = require("express");
const router = express.Router();
const GradeCriteriaController = require("../controllers/GradeCriteriaController");

/**
 * @swagger
 * tags:
 *   name: GradeCriteria
 *   description: API operations related to grades
 */
/**
 * @swagger
 * /grades/getGradeCriteria:
 *   get:
 *     summary: Get grade criteria
 *     tags: [GradeCriteria]
 *     responses:
 *       '200':
 *         description: Grade criteria retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GradeCriteria'
 *       '404':
 *         description: Grade criteria not found
 */
router.get("/getGradeCriteria", GradeCriteriaController.getGradeCriteria);

module.exports = router;
