
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configura tu objeto de configuración de Firebase
const firebaseConfig = {

    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO.firebaseapp.com",
    projectId: "TU_ID_DE_PROYECTO",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
  };

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Obten una instancia de Firestore
const firestore = getFirestore(app);

export default firestore;
