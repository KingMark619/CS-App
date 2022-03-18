// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYcuO-bQQuYXaZErQEjbjjdvdeJmSjOqM",
  authDomain: "congo-sante-cf770.firebaseapp.com",
  projectId: "congo-sante-cf770",
  storageBucket: "congo-sante-cf770.appspot.com",
  messagingSenderId: "362296323167",
  appId: "1:362296323167:web:1bc77121249591b1e6ffea",
  measurementId: "G-Q9S8CBDKHR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)

 // firestore 
const db = getFirestore()

export {app, db }



