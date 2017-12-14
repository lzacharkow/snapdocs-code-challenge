// Container component... Connects to redux store

import { connect } from 'react-redux';
import _ from 'lodash';

import CandidatesList from './CandidatesList';

const mapStateToProps = state => ({
	employees: _.filter(state.employees, (employee, key) => {
		if (employee.active) {
			console.log('this employee is active: ', employee.name);
			return {
				id: key,
				...employee,
			};
		}
	}),
});

export default connect(mapStateToProps)(CandidatesList);
