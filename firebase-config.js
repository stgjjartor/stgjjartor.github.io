import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

// Firebase configuration
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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
