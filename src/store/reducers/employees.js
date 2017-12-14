// A sample reducer.

import { SET_EMPLOYEES } from '../../constants';

const initialState = {};

const employees = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
			...state,
			...action.payload.employees,
		};
    default:
      return state;
  }
};

export default employees;
