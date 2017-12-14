// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function CandidateProfile({ employee }) {
	console.log('employee: ', employee);
	if (!employee) {
		return null;
	}
	return (
		<div className="page-wrapper">
			<div className="profile__snapshot">
				<img src="" />
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

CandidateProfile.propTypes = {
	// name: PropTypes.string.isRequired,
};

export default CandidateProfile;