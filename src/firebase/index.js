import * as firebase from 'firebase';

// Initialize
const config = {
	apiKey: "AIzaSyB5171RmMdJzO131E_Wypm1o1uVsvWBfvw",
	authDomain: "leslie-and-snapdocs.firebaseapp.com",
	databaseURL: "https://leslie-and-snapdocs.firebaseio.com",
	projectId: "leslie-and-snapdocs",
	storageBucket: "",
	messagingSenderId: "404074347699"
};
const firebaseApp = firebase.initializeApp(config);
const firebaseDb = firebaseApp.database();

export default firebaseDb;
