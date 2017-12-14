// Get shorthand refs for firebase values.
/* eslint-disable import/prefer-default-export */

import firebaseDb from './index';

export const employees = firebaseDb.ref().child('employees');
