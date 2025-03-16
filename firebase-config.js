// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE00qPqjZQxCyFVPVeTGBBmjTm-tQL-bw",
  authDomain: "lacocinadeana-d99e4.firebaseapp.com",
  databaseURL: "https://lacocinadeana-d99e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lacocinadeana-d99e4",
  storageBucket: "lacocinadeana-d99e4.firebasestorage.app",
  messagingSenderId: "524705575432",
  appId: "1:524705575432:web:75211ec85fe2d4b52a57bd",
  measurementId: "G-CV273FDWV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
