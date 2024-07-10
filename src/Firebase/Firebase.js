// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc5HZm1SpRhBz3ClHxbsqtf3WUfxZax_o",
  authDomain: "buy-buzzar.firebaseapp.com",
  projectId: "buy-buzzar",
  storageBucket: "buy-buzzar.appspot.com",
  messagingSenderId: "120390646517",
  appId: "1:120390646517:web:7787dc0abd19c3de1f23bc",
  measurementId: "G-PFBS8SPSQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Corrected capitalization
export { app, auth, db };

