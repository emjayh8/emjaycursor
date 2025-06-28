// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj7tXbG4ce--ar53uv6W8nAJFmIrWpWao",
  authDomain: "emjaycursor.firebaseapp.com",
  projectId: "emjaycursor",
  storageBucket: "emjaycursor.appspot.com",
  messagingSenderId: "220076644143",
  appId: "1:220076644143:web:2338993300b8762a1673da",
  measurementId: "G-L94SV1R0PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };