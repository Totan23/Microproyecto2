import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase-config';

const auth = getAuth(app);

export const registerUser = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  
};
