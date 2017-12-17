// Presentation component

import React from 'react';
import './styles.css';

function EmployeeProfile({ employee }) {
	if (!employee) {
		return null;
	}

	return (
		<div className="page-wrapper">
			<div className="profile__snapshot">
				<img src="" alt={employee.name} />
				<h1>{employee.name}</h1>
				<p className="p--headline">{employee.bio}</p>
			</div>
			<div className="profile__details">
				<p>Age: {employee.age}</p>
				<p>Email: {employee.email}</p>
			</div>
		</div>
	);
}

EmployeeProfile.propTypes = {
	// name: PropTypes.string.isRequired,
};

export default EmployeeProfile;
