import { SET_SAMPLE_NAME } from '../actions/sample';

const initialState = {
	name: 'Sample',
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAMPLE_NAME:
      return {
			...state,
			name: action.payload.name,
		};
    default:
      return state;
  }
};

export default sample;
