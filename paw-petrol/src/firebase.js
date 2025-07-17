// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDADdFM0HZNOnrN1qiaEbvbdlykhFeWhzk",
  authDomain: "pet-firebase-29602.firebaseapp.com",
  projectId: "pet-firebase-29602",
  storageBucket: "pet-firebase-29602.firebasestorage.app",
  messagingSenderId: "621256355983",
  appId: "1:621256355983:web:3f1fa81c22f214f55840fa",
  measurementId: "G-0M9XG5HTFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()
export const db=getFirestore()