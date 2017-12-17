// Container component... Connects to redux store

import { connect } from 'react-redux';

import EmployeeProfile from './EmployeeProfile';

const mapStateToProps = (state, ownProps) => ({
	isLoading: state.employees.isLoading,
	employee: state.employees.employees[ownProps.id],
});

export default connect(mapStateToProps)(EmployeeProfile);
