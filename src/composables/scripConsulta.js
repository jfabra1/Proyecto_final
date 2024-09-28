// Función para obtener datos desde Firestore
import { collection, getDocs } from "firebase/firestore";

export const getDataFromFirestore = async (coleccion, db) => {
  const userData = [];
  const querySnapshot = await getDocs(collection(db, coleccion));
  querySnapshot.forEach((doc) => {
    userData.push({ id: doc.id, ...doc.data() });
  });
  return userData;
};