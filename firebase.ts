import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAlorL2hZ284IbO_bEiq_aIvNarze8ZURo',
	authDomain: 'decode-community.firebaseapp.com',
	projectId: 'decode-community',
	storageBucket: 'decode-community.appspot.com',
	messagingSenderId: '385324300552',
	appId: '1:385324300552:web:6e5d9bad8b8e7b4ae794bd',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };
