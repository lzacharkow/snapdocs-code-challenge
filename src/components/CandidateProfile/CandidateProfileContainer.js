// Container component... Connects to redux store

import { connect } from 'react-redux';

import CandidateProfile from './CandidateProfile';

const mapStateToProps = (state, ownProps) => ({
	employee: state.employees[ownProps.id],
});

export default connect(mapStateToProps)(CandidateProfile);
