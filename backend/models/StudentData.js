// const StudentData = [
// 	{
// 		name: "Emily Johnson",
// 		parentName: "John Johnson",
// 		contact: "123-456-7890",
// 		regNo: 2024001,
// 		email: "emily.johnson@example.com",
// 		address: "123 Main Street, Cityville, State",
// 	},
// 	{
// 		name: "Liam Smith",
// 		parentName: "Sarah Smith",
// 		contact: "234-567-8901",
// 		regNo: 2024002,
// 		email: "liam.smith@example.com",
// 		address: "456 Elm Street, Townsville, State",
// 	},
// 	{
// 		name: "Sophia Williams",
// 		parentName: "Michael Williams",
// 		contact: "345-678-9012",
// 		regNo: 2024003,
// 		email: "sophia.williams@example.com",
// 		address: "789 Oak Avenue, Villagetown, State",
// 	},
// 	{
// 		name: "Noah Brown",
// 		parentName: "Jessica Brown",
// 		contact: "456-789-0123",
// 		regNo: 2024004,
// 		email: "noah.brown@example.com",
// 		address: "012 Pine Road, Hamlet City, State",
// 	},
// 	{
// 		name: "Olivia Jones",
// 		parentName: "David Jones",
// 		contact: "567-890-1234",
// 		regNo: 2024005,
// 		email: "olivia.jones@example.com",
// 		address: "345 Cedar Lane, Riverside, State",
// 	},
// 	{
// 		name: "William Garcia",
// 		parentName: "Amanda Garcia",
// 		contact: "678-901-2345",
// 		regNo: 2024006,
// 		email: "william.garcia@example.com",
// 		address: "678 Maple Drive, Hillside, State",
// 	},
// 	{
// 		name: "Ava Martinez",
// 		parentName: "James Martinez",
// 		contact: "789-012-3456",
// 		regNo: 2024007,
// 		email: "ava.martinez@example.com",
// 		address: "901 Birch Street, Lakeside, State",
// 	},
// 	{
// 		name: "James Taylor",
// 		parentName: "Jennifer Taylor",
// 		contact: "890-123-4567",
// 		regNo: 2024008,
// 		email: "james.taylor@example.com",
// 		address: "234 Pinecrest Road, Mountainview, State",
// 	},
// 	{
// 		name: "Isabella Anderson",
// 		parentName: "Daniel Anderson",
// 		contact: "901-234-5678",
// 		regNo: 2024009,
// 		email: "isabella.anderson@example.com",
// 		address: "567 Oakwood Avenue, Beachtown, State",
// 	},
// 	{
// 		name: "Oliver Thomas",
// 		parentName: "Lauren Thomas",
// 		contact: "012-345-6789",
// 		regNo: 2024010,
// 		email: "oliver.thomas@example.com",
// 		address: "890 Elmwood Lane, Hillcrest, State",
// 	},
// ];
const db = require("../util/database");

module.exports = class StudentData {
	constructor(name, parentName, contact, regNo, email, address) {
		(this.name = name),
			(this.parentName = parentName),
			(this.contact = contact),
			(this.regNo = regNo),
			(this.email = email),
			(this.address = address);
	}
	save() {
		return db.execute(
			"INSERT INTO studentdata(name,parentName,contact,regNo,email,address) VALUES(?,?,?,?,?,?)",
			[
				this.name,
				this.parentName,
				this.contact,
				this.regNo,
				this.email,
				this.address,
			]
		);
	}
	static deleteById(id) {
		return db.execute("DELETE FROM studentdata WHERE studentdata.regNo=?", [
			id,
		]);
	}
	static fetchAll() {
		return db.execute("SELECT * FROM studentdata");
	}
	static findById(id) {
		return db.execute("SELECT * FROM studentdata WHERE studentdata.regNo=?", [
			id,
		]);
	}
	updateById() {
		return db.execute(
			"UPDATE studentdata SET name=?, parentName=?, contact=?, email=?, address=? WHERE regNo=?",
			[
				this.name,
				this.parentName,
				this.contact,
				this.email,
				this.address,
				this.regNo,
			]
		);
	}
};
