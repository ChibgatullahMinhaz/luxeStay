import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSV-nuHitkRFK8gBhyfoqTAgfiYJTmmXo",
  authDomain: "luxe-stay-ff6b0.firebaseapp.com",
  projectId: "luxe-stay-ff6b0",
  storageBucket: "luxe-stay-ff6b0.firebasestorage.app",
  messagingSenderId: "1064105427730",
  appId: "1:1064105427730:web:1316752fd58258324329cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)