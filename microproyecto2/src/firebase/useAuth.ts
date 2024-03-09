import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase-config';

const auth = getAuth(app);

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado:", userCredential.user);
    return userCredential;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};
