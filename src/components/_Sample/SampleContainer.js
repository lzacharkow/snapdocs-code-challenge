import { connect } from 'react-redux';

import Sample from './Sample';
import { setSampleName } from '../../actions/sample';

const mapStateToProps = state => ({
	name: state.sample.name,
});

const mapDispatchToProps = dispatch => ({
	onChangeHandler: e => {
		dispatch(setSampleName(e.target.value));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
