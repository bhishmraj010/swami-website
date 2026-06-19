import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const submitContactForm = async (formData) => {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...formData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};