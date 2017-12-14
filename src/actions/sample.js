import { SET_SAMPLE_NAME } from '../constants';

export function setSampleName(name) {
	return {
		type: SET_SAMPLE_NAME,
		payload: {
			name,
		}
	};
}
