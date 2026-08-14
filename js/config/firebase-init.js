// js/config/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  // ATENÇÃO: COPIE ESTES DADOS DO SEU FIREBASE CONSOLE
  apiKey: "SUA_API_KEY",
  authDomain: "oficlaro-a632c.firebaseapp.com",
  databaseURL: "https://oficlaro-a632c-default-rtdb.firebaseio.com",
  projectId: "oficlaro-a632c",
  storageBucket: "oficlaro-a632c.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Exporta as instâncias dos serviços para uso no restante do projeto
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
