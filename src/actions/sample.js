import {
	SET_SAMPLE_NAME,
	SECRET_NAME,
} from '../constants';

function setSampleName(name) {
	return {
		type: SET_SAMPLE_NAME,
		payload: {
			name,
		}
	};
}

export function setSampleNameThunk(name) {
	return (dispatch, getState) => {
		// Check if the user said the magic word.
		return name === 'Beep'
			? dispatch(setSampleName(SECRET_NAME))
			: dispatch(setSampleName(name));
	};
}
