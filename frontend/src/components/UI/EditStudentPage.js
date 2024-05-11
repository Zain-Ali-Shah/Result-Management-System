import React from "react";
import EditStudentForm from "../Form/EditStudentForm";

const EditStudentPage = ({ studentData, onUpdate, onCancel }) => {
	return (
		<div>
			<h2>Edit Student</h2>
			<EditStudentForm
				studentData={studentData}
				onUpdate={onUpdate}
				onCancel={onCancel}
			/>
		</div>
	);
};

export default EditStudentPage;
