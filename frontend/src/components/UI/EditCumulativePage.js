import React from "react";
import EditCumulativeForm from "../Form/EditCumulativeForm";

const EditCumulativePage = ({ cumulativeData, onUpdate, onCancel }) => {
	return (
		<div>
			<h2>Edit Cumulative Data</h2>
			<EditCumulativeForm
				cumulativeData={cumulativeData}
				onUpdate={onUpdate}
				onCancel={onCancel}
			/>
		</div>
	);
};

export default EditCumulativePage;
