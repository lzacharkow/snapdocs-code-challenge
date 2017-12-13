export const SET_SAMPLE_NAME = 'SET_SAMPLE_NAME';

export function setSampleName(name) {
	return {
		type: SET_SAMPLE_NAME,
		payload: {
			name,
		}
	};
}
