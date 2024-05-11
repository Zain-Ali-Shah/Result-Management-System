const Sequelize = require("sequelize");

const sequelize = new Sequelize("result_management_system", "root", "zain", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
