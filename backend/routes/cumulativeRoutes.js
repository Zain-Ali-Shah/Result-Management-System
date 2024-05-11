// routes/cumulativeRoutes.js
const express = require("express");
const router = express.Router();
const CumulativeController = require("../controllers/CumulativeController");

/**
 * @swagger
 * tags:
 *   name: Cumulative Data
 *   description: API operations related to cumulative data
 */

/**
 * @swagger
 * /cumulative/getAllCumulativeData:
 *   get:
 *     summary: Get all cumulative data
 *     tags: [Cumulative Data]
 *     responses:
 *       '200':
 *         description: A list of all cumulative data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CumulativeData'
 */
router.get("/getAllCumulativeData", CumulativeController.getAllCumulativeData);

/**
 * @swagger
 * /cumulative/getStudentCumulativeById/{stName}:
 *   get:
 *     summary: Get cumulative data of a student by name
 *     tags: [Cumulative Data]
 *     parameters:
 *       - in: path
 *         name: stName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the student to retrieve cumulative data for
 *     responses:
 *       '200':
 *         description: Cumulative data for the specified student
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CumulativeData'
 *       '404':
 *         description: Cumulative data not found for the specified student
 */
router.get(
	"/getStudentCumulativeById/:stName",
	CumulativeController.getStudentCumulativeById
);

/**
 * @swagger
 * /cumulative/addNewCumulative:
 *   post:
 *     summary: Add new cumulative data
 *     tags: [Cumulative Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CumulativeData'
 *     responses:
 *       '201':
 *         description: Cumulative data added successfully
 *       '400':
 *         description: Bad request, check request body
 */
router.post("/addNewCumulative", CumulativeController.addNewCumulative);

/**
 * @swagger
 * /cumulative/updateCumulativeById:
 *   put:
 *     summary: Update cumulative data by id
 *     tags: [Cumulative Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CumulativeData'
 *     responses:
 *       '200':
 *         description: Cumulative data updated successfully
 *       '404':
 *         description: Cumulative data not found for the specified student
 *       '400':
 *         description: Bad request, check request body
 */
router.put("/updateCumulativeById", CumulativeController.updateCumulativeById);

/**
 * @swagger
 * /cumulative/deleteCumulativeById/:id:
 *   delete:
 *     summary: Delete cumulative data by id
 *     tags: [Cumulative Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CumulativeData'
 *     responses:
 *       '200':
 *         description: Cumulative data deleted successfully
 *       '404':
 *         description: Cumulative data not found for the specified student
 */
router.delete(
	"/deleteCumulativeById/:id",
	CumulativeController.deleteCumulativeById
);

module.exports = router;
