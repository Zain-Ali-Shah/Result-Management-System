const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const cumulativeRoutes = require("./routes/cumulativeRoutes");
const gradeCriteriaRoutes = require("./routes/gradeCriteriaRoutes");
const finalizedGradesRoutes = require("./routes/FinalizedGradesRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const sequelize = require("./util/database2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Swagger options
const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "Student API",
			description: "API for managing students",
			version: "1.0.0",
		},
		servers: [
			{
				url: "http://localhost:5000",
				description: "Development server",
			},
		],
	},
	apis: ["./routes/*.js"], // Include all route files
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/students", studentRoutes);
app.use("/cumulative", cumulativeRoutes);
app.use("/grades", gradeCriteriaRoutes);
app.use("/finalizedGrades", finalizedGradesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
sequelize
	.sync()
	.then((result) => {
		// console.log(result);
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => console.log(err));
