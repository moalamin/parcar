import firebase from 'firebase';
import appConfig from './config.js';

const config = {
	apiKey: appConfig.apiKey,
	authDomain: appConfig.authDomain,
	databaseURL: appConfig.databaseURL,
	projectId: appConfig.projectId,
	storageBucket: appConfig.storageBucket,
	messagingSenderId: appConfig.messagingSenderId
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();