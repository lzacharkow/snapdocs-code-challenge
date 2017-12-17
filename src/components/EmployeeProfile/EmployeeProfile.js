// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import StatusBanner from '../StatusBanner';
import Button from '../Button';
import getAge from '../../utils/getAge';

function EmployeeProfile({
	isLoading,
	employee,
}) {

	const inactiveElement = !employee.active
		? <StatusBanner message="This employee is no longer with this company." />
		: null;

	if (isLoading) {
		return null;
	}

	return (
		<div className="employee-profile">
			{inactiveElement}

			<div className="employee-profile-card">

				{/* Image, Name, Bio, & edit */}
				<div className="employee-profile-card__summary">
					<img className="employee-profile-card__summary__image" src="" alt={employee.name} />
					<div className="employee-profile-card__summary__info">
						<div className="employee-profile-card__summary__info__name">
							<h1>{employee.name}</h1>
							<Button secondary>Edit</Button>
						</div>
						<p className="employee-profile-card__summary__info__bio">
							{employee.bio}
						</p>
					</div>
				</div>

				{/* All other details */}
				<div className="employee-profile-card__details">
					<div className="employee-profile-card__details__row">
						<h3>Email</h3>
						<p>{employee.email}</p>
					</div>
					<div className="employee-profile-card__details__row">
						<h3>Age</h3>
						<p>{getAge(employee.date_of_birth)} years old</p>
					</div>
					<div className="employee-profile-card__details__row">
						<h3>Status</h3>
						<p>{employee.active ? 'Active' : 'Not active'}</p>
					</div>
				</div>
			</div>

		</div>
	);
}

EmployeeProfile.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	employee: PropTypes.shape({
		active: PropTypes.bool,
		bio: PropTypes.string,
		date_of_birth: PropTypes.number,
		email: PropTypes.string,
		name: PropTypes.string,
	}),
};

EmployeeProfile.defaultProps = {
	active: true,
	employee: {},
};

export default EmployeeProfile;
