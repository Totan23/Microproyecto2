import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "tu_api_key",
  authDomain: "tu_auth_domain",
  projectId: "tu_project_id",
  storageBucket: "tu_storage_bucket",
  messagingSenderId: "tu_messaging_sender_id",
  appId: "tu_app_id",
  measurementId: "tu_measurement_id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;