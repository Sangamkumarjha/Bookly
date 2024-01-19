// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcIPM2mT27B3tvReBQc9rHSNJu1eCG-tA",
    authDomain: "bookly-2c672.firebaseapp.com",
    projectId: "bookly-2c672",
    storageBucket: "bookly-2c672.appspot.com",
    messagingSenderId: "1070847890026",
    appId: "1:1070847890026:web:dc6eea006400689ff67013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}