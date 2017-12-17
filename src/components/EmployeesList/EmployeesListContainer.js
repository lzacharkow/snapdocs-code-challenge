// Container component... Connects to redux store

import { connect } from 'react-redux';

import EmployeesList from './EmployeesList';

const mapStateToProps = state => ({
	employees: state.employees,
});

export default connect(mapStateToProps)(EmployeesList);
