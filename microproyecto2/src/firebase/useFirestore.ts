
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase-config";

interface UserInfo {
  firstName: string;
  lastName: string;
  favoriteGame: string;
}

export const saveUserInfo = async (userId: string, userInfo: UserInfo) => {
  try {
    await setDoc(doc(db, "users", userId), userInfo);
    console.log("Información del usuario guardada con éxito");
  } catch (error) {
    console.error("Error al guardar información del usuario:", error);
    throw error;
  }
};

