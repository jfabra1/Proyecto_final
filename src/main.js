// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Asegúrate de que la ruta sea correcta
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};


// Inicializa Firebase
initializeApp(firebaseConfig);

// Inicializa Firebase Auth
const auth = getAuth();

const app = createApp(App);

app.use(router); // Usa el router en la instancia de la aplicación

app.use(VueSweetalert2);

// Proporciona `auth` globalmente a todos los componentes
app.provide('auth', auth);

app.mount("#app");
