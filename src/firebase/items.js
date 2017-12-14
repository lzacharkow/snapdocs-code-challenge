// Get shorthand refs for firebase values.

import firebaseDb from './index';

export const name = firebaseDb.ref().child('name');
