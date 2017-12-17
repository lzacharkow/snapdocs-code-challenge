// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import StatusBanner from '../StatusBanner';
import Button from '../Button';

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
		<div>
			{inactiveElement}

			<div className="employee-profile">

				<div className="employee-profile__summary">
					<img
						className="employee-profile__summary__image"
						src=""
						alt={employee.name}
					/>
					<div className="employee-profile__summary__text">
						<div className="employee-profile__summary__heading">
							<h1>
								{employee.name}
							</h1>
							<Button secondary>
								Edit
							</Button>
						</div>
						<p className="employee-profile__summary__sub-heading">
							{employee.bio}
						</p>
					</div>
				</div> {/* end employee-profile__summary */}

				<div className="employee-profile__details">
					<div className="employee-profile__details__row">
						Email: {employee.email}
					</div>
					<div className="employee-profile__details__row">
						Date of birth: {employee.date_of_birth}
					</div>
					<div className="employee-profile__details__row">
						Status: {employee.active ? 'Active' : 'Not active'}
					</div>
				</div> {/* end employee-profile__details */}
			</div>

		</div>
	);
}

EmployeeProfile.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	employee: PropTypes.shape({
		active: PropTypes.bool,
		bio: PropTypes.string,
		date_of_birth: PropTypes.string,
		email: PropTypes.string,
		name: PropTypes.string,
	}),
};

EmployeeProfile.defaultProps = {
	active: true,
	employee: {},
};

export default EmployeeProfile;
