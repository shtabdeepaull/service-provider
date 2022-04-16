// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFFs0Q1EF1mXAr9oGMo238iLdigsTkXp8",
  authDomain: "edulab-visa-consultancy-center.firebaseapp.com",
  projectId: "edulab-visa-consultancy-center",
  storageBucket: "edulab-visa-consultancy-center.appspot.com",
  messagingSenderId: "382809634634",
  appId: "1:382809634634:web:74c5c7b7bac0ca375233b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;