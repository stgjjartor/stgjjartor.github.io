// Importar las funciones necesarias de Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Configuración de Firebase
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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exportar la base de datos para su uso en otros archivos
export { database, ref, push, onChildAdded };
