
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuvtU0CUoTLqmYSJ8hdrlCE6qeC4oSr2Y",
  authDomain: "ecommerce-e9055.firebaseapp.com",
  projectId: "ecommerce-e9055",
  storageBucket: "ecommerce-e9055.appspot.com",
  messagingSenderId: "829178369978",
  appId: "1:829178369978:web:7c9dcade78668ca6876f83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const googleAuthProvider = new auth.GoogleAuthProvider();