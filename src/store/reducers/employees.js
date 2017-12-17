// A sample reducer.

import { SET_EMPLOYEES } from '../../constants';

const initialState = {
	isLoading: true,
	employees: {},
};

const employees = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
			...state,
			isLoading: false,
			employees: action.payload.employees,
		};
    default:
      return state;
  }
};

export default employees;
