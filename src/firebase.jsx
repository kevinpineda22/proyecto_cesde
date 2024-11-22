// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuOr6wBZ-g8TvTXSdujb2U59mQzgQEpl0",
  authDomain: "proyecto-cesde-d832c.firebaseapp.com",
  projectId: "proyecto-cesde-d832c",
  storageBucket: "proyecto-cesde-d832c.firebasestorage.app",
  messagingSenderId: "348376055909",
  appId: "1:348376055909:web:1a69c1faec36f35961868c",
  measurementId: "G-S9159G61DR"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa el servicio de autenticación
export const auth = getAuth(app);
