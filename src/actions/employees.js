// Redux actions
/* eslint-disable import/prefer-default-export */

import {
	SET_EMPLOYEES,
} from '../constants';

export function setEmployees(employees) {
	return {
		type: SET_EMPLOYEES,
		payload: {
			employees,
		},
	};
}
