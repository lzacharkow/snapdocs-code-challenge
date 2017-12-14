import {
	SET_SAMPLE_NAME,
	MAGIC_WORD,
	MAGIC_WORD_RESPONSE,
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
		return name === MAGIC_WORD
			? dispatch(setSampleName(MAGIC_WORD_RESPONSE))
			: dispatch(setSampleName(name));
	};
}
