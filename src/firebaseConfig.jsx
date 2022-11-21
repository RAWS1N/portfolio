// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAF-BRWM9Zph-heY2jLcoKJXtihUXLYE9s",
  authDomain: "portfolio-91d76.firebaseapp.com",
  projectId: "portfolio-91d76",
  storageBucket: "portfolio-91d76.appspot.com",
  messagingSenderId: "801902083597",
  appId: "1:801902083597:web:96375bf0bad5fe1cafdf44",
  measurementId: "G-74K64NKM9H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);