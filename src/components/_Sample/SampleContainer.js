// Container component... Connects to redux store

import { connect } from 'react-redux';

import Sample from './Sample';

const mapStateToProps = state => ({
	name: state.sample.name,
});

export default connect(mapStateToProps)(Sample);
