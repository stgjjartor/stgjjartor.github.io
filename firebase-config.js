// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBE00qPqjZQxCyFVPVeTGBBmjTm-tQL-bw",
    authDomain: "lacocinadeana-d99e4.firebaseapp.com",
    databaseURL: "https://lacocinadeana-d99e4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lacocinadeana-d99e4",
    storageBucket: "lacocinadeana-d99e4.firebasestorage.app",
    messagingSenderId: "524705575432",
    appId: "1:524705575432:web:75211ec85fe2d4b52a57bd"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
