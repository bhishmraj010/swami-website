import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwYytAzx6fTHz9wAG6D55SLRQQO25mfdQ",
  authDomain: "swamiwebsite-fc0cc.firebaseapp.com",
  projectId: "swamiwebsite-fc0cc",
  storageBucket: "swamiwebsite-fc0cc.firebasestorage.app",
  messagingSenderId: "879455002030",
  appId: "1:879455002030:web:7788566b680071640fbc3f",
  measurementId: "G-VSS8VT3CKT",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
