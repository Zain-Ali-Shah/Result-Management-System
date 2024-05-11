// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/StudentController");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API operations related to students
 */

/**
 * @swagger
 * /students/getAllStudents:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       '200':
 *         description: A list of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get("/getAllStudents", StudentController.getAllStudents);

/**
 * @swagger
 * /students/getStudentById/{regNo}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: regNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: Registration number of the student to retrieve
 *     responses:
 *       '200':
 *         description: Student details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       '404':
 *         description: Student not found
 */
router.get("/getStudentById/:regNo", StudentController.getStudentById);

/**
 * @swagger
 * /students/addNewStudent:
 *   post:
 *     summary: Add a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '201':
 *         description: Student added successfully
 *       '400':
 *         description: Bad request, check request body
 */
router.post("/addNewStudent", StudentController.addNewStudent);

/**
 * @swagger
 * /students/updateStudentById/{regNo}:
 *   put:
 *     summary: Update a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: regNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: Registration number of the student to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '200':
 *         description: Student updated successfully
 *       '404':
 *         description: Student not found
 *       '400':
 *         description: Bad request, check request body
 */
router.put("/updateStudentById/:regNo", StudentController.updateStudentById);

/**
 * @swagger
 * /students/deleteStudentById/{regNo}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: regNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: Registration number of the student to delete
 *     responses:
 *       '200':
 *         description: Student deleted successfully
 *       '404':
 *         description: Student not found
 */
router.delete("/deleteStudentById/:regNo", StudentController.deleteStudentById);

module.exports = router;
