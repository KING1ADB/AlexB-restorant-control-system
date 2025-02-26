// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5_gqYP_9VY4TBEEeRGiTTbF5JTFvqpCk",
  authDomain: "alexb-control-system.firebaseapp.com",
  projectId: "alexb-control-system",
  storageBucket: "alexb-control-system.firebasestorage.app",
  messagingSenderId: "718102911285",
  appId: "1:718102911285:web:331435e1072b8282a3d47c",
  measurementId: "G-S0L324K9NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance