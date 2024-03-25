// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHb_9sO4OE3Ig7DAODiblM6aZr-HX1Dd0",
  authDomain: "frameworks-2.firebaseapp.com",
  projectId: "frameworks-2",
  storageBucket: "frameworks-2.appspot.com",
  messagingSenderId: "647646091300",
  appId: "1:647646091300:web:6c55cc6a7c466aec2260b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
