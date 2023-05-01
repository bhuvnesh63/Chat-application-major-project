import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyD7KNZtUrv8Q3aJlNEICFb-bkuPykjmcbI",
  authDomain: "chatapp-c6da5.firebaseapp.com",
  projectId: "chatapp-c6da5",
  storageBucket: "chatapp-c6da5.appspot.com",
  messagingSenderId: "103634914703",
  appId: "1:103634914703:web:94b33c55599c2d28eccffa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
