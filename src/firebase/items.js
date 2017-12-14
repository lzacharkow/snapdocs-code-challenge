// Get shorthand refs for firebase values.
/* eslint-disable import/prefer-default-export */

import firebaseDb from './index';

export const name = firebaseDb.ref().child('name');
