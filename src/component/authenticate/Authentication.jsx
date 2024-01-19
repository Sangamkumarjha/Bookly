// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
 const  app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
