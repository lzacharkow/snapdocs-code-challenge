// Container component... Connects to redux store

import { connect } from 'react-redux';

import EmployeeProfile from './EmployeeProfile';

const mapStateToProps = (state, ownProps) => ({
	employee: state.employees[ownProps.id],
});

export default connect(mapStateToProps)(EmployeeProfile);
