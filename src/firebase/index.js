// Initialize the firebase app.

import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../constants';

// Initialize
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
const firebaseDb = firebaseApp.database();

export default firebaseDb;
