// Container component... Connects to redux store

import { connect } from 'react-redux';
import _ from 'lodash';

import EmployeesList from './EmployeesList';

const mapStateToProps = state => ({
	employees: _.map(state.employees, (employee, key) => ({
		...employee,
		id: key,
	})),
});

export default connect(mapStateToProps)(EmployeesList);
