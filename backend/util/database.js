const mysql = require("mysql2");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "result_management_system",
	password: "zain",
});

module.exports = pool.promise();
