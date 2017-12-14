// Container component... Connects to redux store

import { connect } from 'react-redux';

import CandidatesList from './CandidatesList';

const mapStateToProps = state => ({
	employees: state.employees,
});

export default connect(mapStateToProps)(CandidatesList);
