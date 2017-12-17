// Container component... Connects to redux store

import { connect } from 'react-redux';
import _ from 'lodash';

import EmployeesList from './EmployeesList';

const mapStateToProps = state => ({
	isLoading: state.employees.isLoading,
	employees: _.map(state.employees.employees, (employee, key) => ({
		...employee,
		id: key,
	})),
});

export default connect(mapStateToProps)(EmployeesList);
