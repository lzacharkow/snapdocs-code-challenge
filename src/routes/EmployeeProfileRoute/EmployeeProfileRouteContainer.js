// Container component... Connects to redux store

import { connect } from 'react-redux';
import _ from 'lodash';

import EmployeeProfileRoute from './EmployeeProfileRoute';

const mapStateToProps = (state, ownProps) => ({
	isLoading: state.employees.isLoading,
	employeeName: _.get(state.employees.employees[ownProps.match.params.id], 'name'),
});

export default connect(mapStateToProps)(EmployeeProfileRoute);
