// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrlss8EAJGbItc2oGu5zFOck9x-tCgmVQ",
    authDomain: "harshit-portfolio-143e1.firebaseapp.com",
    projectId: "harshit-portfolio-143e1",
    storageBucket: "harshit-portfolio-143e1.appspot.com",
    messagingSenderId: "1055576074540",
    appId: "1:1055576074540:web:a753ce52490aae2234e489"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
